import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { SearchFieldComponent } from './searchfield/searchfield.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@app/core';
import { SafePipe } from '@app/pipes/safe.pipe';

@NgModule({
  imports: [ReactiveFormsModule, NgbModule, CommonModule, TranslateModule, CoreModule,CommonModule,FormsModule],
  declarations: [LoaderComponent,SearchFieldComponent, SafePipe],
  exports: [LoaderComponent,SearchFieldComponent,SafePipe]
})
export class SharedModule {}
