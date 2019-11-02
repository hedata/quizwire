import { Component, OnInit, Input } from '@angular/core';

import { environment } from '@env/environment';
import { Logger, I18nService } from '@app/core';

@Component({
  selector: 'claimtypeselector',
  templateUrl: './claimtypeselector.component.html',
  styleUrls: ['./claimtypeselector.component.scss']
})
export class ClaimtypeSelectorComponent implements OnInit {
  @Input() language: string = 'en';
  @Input() claim: any;

  constructor(private i18nService: I18nService) {}

  ngOnInit() {
    console.log('[ClaimTypeSelector');
  }
}
