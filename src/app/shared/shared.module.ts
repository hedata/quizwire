import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { SearchFieldComponent } from './searchfield/searchfield.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@app/core';

@NgModule({
  imports: [ReactiveFormsModule, NgbModule, CommonModule, TranslateModule, CoreModule,CommonModule,FormsModule],
  declarations: [LoaderComponent,SearchFieldComponent],
  exports: [LoaderComponent,SearchFieldComponent]
})
export class SharedModule {}
