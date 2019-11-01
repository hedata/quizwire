import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  public activeComponentConfig: { name: string; params: Array<any> } = { name: undefined, params :[]};
  ngOnInit() {
    console.log('[Shell]- Init', this.route);
    this.route.url.pipe().subscribe(url => {
      console.log('[Shell] - ', url);
      const activeComponentConfig: any = {
        name: '',
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
      console.log('[Shell] - setting active compoennt ', this.activeComponentConfig);
    });
  }
  toggleComponent= (component:string) => {
    console.log("[Shell] - toggle ",component);
    if(this.activeComponentConfig.name ===component) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/'+component]);
    }
  }
}
