import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { environment } from '@env/environment';
import { Logger, I18nService } from '@app/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() activeComponentConfig: any;
  isActive: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (this.activeComponentConfig.name === '') {
      console.log('[Home] - active');
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private i18nService: I18nService
  ) {
    //'highscore/:id',
  }

  ngOnInit() {}
}
