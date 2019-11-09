import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize, debounce } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';
import { DataService } from '@app/services/data.service';

const log = new Logger('Entity');

@Component({
  selector: 'stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {
  version: string = environment.version;
  public loading:boolean=true;
  public streamItems: any =[] ;
  public fade:boolean = true;
  public language: String = 'en';
  private lastDate : any = new Date();

  @Input() activeComponentConfig: any;
  isActive: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (this.activeComponentConfig.name === 'stream') {
      console.log('[SettingEntittyActive]');
      this.isActive = true;
      this.loadData();
    } else {
      this.isActive = false;
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private i18nService: I18nService,
    private authenticationService: AuthenticationService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    console.log('[Stream] Init');
    const intervall = 7000;
      setInterval(this.loadData, intervall);
  }

  private loadData = async () => {
    const currentDate:any = new Date();
    if(this.isActive) {
      console.log("[Stream] loding data");
      const countoldItems = this.streamItems.length
      this.streamItems = (await this.dataService.getLatestRawStream({
        lastUpdate : this.streamItems.length>0?this.streamItems[0].created_at:null,
        limit : 3
      })).concat(this.streamItems);

      const diff = (currentDate - this.lastDate) / 1000;
      console.log(this.streamItems.length, "after: ", diff);
      console.log("Start: ",this.lastDate, " End: ",currentDate);
      //console.log(this.streamItems.filter((el:any)=>el.imageUrl));
      this.lastDate = currentDate;
      this.fade=false;
      setTimeout(()=> {
        console.log("[Fade]")
        this.fade = true;
      },3000)
    }

  }
}
