import { Component, OnInit } from '@angular/core';
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
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private i18nService: I18nService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.imageID = id;
  }

  gotoPlay() {
    this.router.navigate(['/'], { replaceUrl: true });
  }

  ngOnInit() {}
}
