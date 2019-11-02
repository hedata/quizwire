import { Component, OnInit, Input } from '@angular/core';

import { environment } from '@env/environment';
import { Logger, I18nService } from '@app/core';

@Component({
  selector: 'timeseries',
  templateUrl: './timeseries.component.html',
  styleUrls: ['./timeseries.component.scss']
})
export class TimeseriesComponent implements OnInit {
  @Input() language: string = 'en';
  @Input() claim: any;

  constructor(private i18nService: I18nService) {}

  ngOnInit() {
    console.log('[TimeseriesComponent');
  }

  getVisualUrl = (slug:string) => {
    return "https://doh.23degrees.io/embed/"+slug;
  }
}
