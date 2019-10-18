import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  public activeComponentConfig: { name: string; params: Array<any> };
  ngOnInit() {
    console.log('[Shell]- Init', this.route);
    this.route.url.pipe().subscribe(url => {
      console.log('[URL] - ', url);
      const activeComponentConfig: any = {
        name: undefined,
        params: []
      };
      //first url part
      //our base routing is here now
      for (let i = 0; i < url.length; i++) {
        if (i === 0) {
          const firstUrl = url[i].path;
          activeComponentConfig.name = firstUrl;
        } else {
          activeComponentConfig.params.push(url[i].path);
        }
      }
      this.activeComponentConfig = activeComponentConfig;
      console.log('[SettingActiveCompoent]', this.activeComponentConfig);
    });
  }
}
