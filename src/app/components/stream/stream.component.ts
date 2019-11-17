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
    //2300
    const intervall = 3400;
      setInterval(this.loadData, intervall);
  }

  private loadData = async () => {
    const currentDate:any = new Date();
    if(this.isActive) {
      //console.log("[Stream] loding data");
      const countoldItems = this.streamItems.length;
      const response = (await this.dataService.getLatestRawStream({
        lastUpdate : this.streamItems.length>0?this.streamItems[0].created_at:null,
        limit : 1
      }));
      if(response.length>0) {
        const item = response[0];
        //add displayType and displayUrl
        this.addTypes(item);
        console.log(item.url);
        console.log(item.display);
        //console.log(item);
        this.streamItems.unshift(item);
        if(this.streamItems.length>500) {
          this.streamItems.pop();
        }
        const diff = (currentDate - this.lastDate) / 1000;
        //console.log("after: ", diff);
        //console.log("Start: ",this.lastDate, " End: ",currentDate);

        this.lastDate = currentDate;
        this.fade=false;
        setTimeout(()=> {
          //console.log("[Fade]")
          this.fade = true;
        },1000)
      } else{
        console.log("[Got no items]")

      }
    }

  }
  addTypes = (item:any) => {
    item.display =  {
      displayType : this.getDisplayType(item),
      displayUrl : null
    };
    item.display.displayUrl = this.getDisplayUrl(item);
    return item;
  }
  private getDisplayUrl = (item:any) => {
    if(item.display.displayType==='image') {
      if(item.url) {
        if(item.url.startsWith('https://i.redd.it/')){
          return item.url;
        }
      }
      if(item.imageUrl) {
        return item.imageUrl;
      }
    }
    if(item.display.displayType==='imgur') {
      return item.url.replace("/a/","/");
    }
    if(item.display.displayType==='youtube') {
      return item.url.replace("https://youtu.be/","https://youtube.com/embed/");
    }
    if(item.display.displayType==='gfycat') {
      return item.url.replace('https://gfycat.com/','https://gfycat.com/ifr/');
    }
    return undefined;
  }
  private getDisplayType = (item:any) => {
    if(item.url) {
      if(item.url.startsWith('https://youtu.be')) {
        //console.log("[Youtube]")
        https://www.youtube.com/watch?v=ErQHVUQ6QCk
        return 'youtube';
      }
      if(item.url.startsWith('https://imgur.com')) {
        //console.log("[Imgur]" )
        return 'imgur';
      };
      if(item.url.startsWith('https://i.imgur.com')) {
        return 'imgur';
      }
      if(item.url.startsWith('https://gfycat.com/slightmarrieddutchshepherddog?utm_source=verticalgifs')) {
        return 'gfycat';
      }
    }
    return 'image';
  }
}
