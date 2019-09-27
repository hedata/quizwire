import { Component, OnInit, Input } from '@angular/core';

import { environment } from '@env/environment';
import { Logger, I18nService } from '@app/core';

@Component({
  selector: 'p18image',
  templateUrl: './p18_image.component.html',
  styleUrls: ['./p18_image.component.scss']
})
export class Property18_ImageComponent implements OnInit {
  @Input() lang: string = 'en';
  @Input() claim: any;

  public imageUrl: string;

  constructor(private i18nService: I18nService) {}

  ngOnInit() {
    console.log('[Rendering] P18 image');
    const val = this.replaceStr(this.claim.value, ' ', '_');

    //this.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/"+val+"/330px-"+val;
    this.imageUrl = 'https://commons.wikimedia.org/wiki/Special:FilePath/' + val + '?width=300';
  }
  replaceStr(str: any, find: any, replace: any) {
    for (var i = 0; i < find.length; i++) {
      str = str.replace(new RegExp(find[i], 'gi'), replace[i]);
    }
    return str;
  }
}
