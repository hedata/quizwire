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
        this.addDisplayTypes(item);
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
  addDisplayTypes = (item:any) => {
    item.display =  {
      displayType : null,
      displayUrl : null
    };
    if(item.url) {
      if(item.url.startsWith('https://www.youtube.com/watch?v=')) {
        item.display.displayType = 'youtube';
        item.display.displayUrl= item.url.replace("https://www.youtube.com/watch?v=","https://youtube.com/embed/");
      }
      if(item.url.startsWith('https://youtu.be')) {
        //console.log("[Youtube]")
        item.display.displayType = 'youtube';
        item.display.displayUrl= item.url.replace("https://youtu.be/","https://youtube.com/embed/");
      }
      if(item.url.startsWith('https://imgur.com')) {
        item.display.displayType =  'imgur';
        item.display.displayUrl = item.url.replace("/a/","/").replace("https://","https://i.")+".jpg";
      };
      if(item.url.startsWith('https://i.imgur.com')) {
        item.display.displayType =  'imgur';
        item.display.displayUrl = item.url;
      }
      if(item.url.startsWith('https://gfycat.com')) {
        item.display.displayType =  'gfycat';
        item.display.displayUrl = item.url.replace('https://gfycat.com/','https://gfycat.com/ifr/');
      }
      if(item.url.startsWith('https://i.redd.it/')){
        item.display.displayUrl = item.url;
        item.display.displayType =  'image';
      }
    }
    if(!item.display.displayType) {
      if(item.imageUrl) {
        item.display.displayType =  'image';
        item.display.displayUrl =  item.imageUrl;
      }
    }
    return item;
  }
}
