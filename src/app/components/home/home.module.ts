import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home.component';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgbModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
