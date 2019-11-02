import { Component, OnInit, Input } from '@angular/core';

import { environment } from '@env/environment';
import { Logger, I18nService } from '@app/core';

@Component({
  selector: 'images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  @Input() language: string = 'en';
  @Input() claim: any;
  @Input() entity : any;


  constructor(private i18nService: I18nService) {}

  ngOnInit() {
    console.log('[Images');
  }
}
