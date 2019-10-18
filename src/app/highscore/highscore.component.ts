import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { environment } from '@env/environment';
import { Logger, I18nService } from '@app/core';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.scss']
})
export class HighscoreComponent implements OnInit {
  public imageID: string = undefined;
  @Input() activeComponentConfig: any;
  isActive: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (this.activeComponentConfig.name === 'highscore') {
      console.log('[SettingEntittyActive]');
      this.isActive = true;
      this.imageID = this.activeComponentConfig.params[0];
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

  gotoPlay() {
    this.router.navigate(['/'], { replaceUrl: true });
  }

  ngOnInit() {}
}
