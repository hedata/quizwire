import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HighscoreRoutingModule } from './highscore-routing.module';
import { HighscoreComponent } from './highscore.component';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgbModule, HighscoreRoutingModule],
  declarations: [HighscoreComponent]
})
export class HighscoreModule {}
