import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search.component';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { DataService } from '@app/services/data.service';

@NgModule({
  imports: [ReactiveFormsModule, NgbModule, CommonModule, TranslateModule, CoreModule, SharedModule, FormsModule],
  exports: [SearchComponent],
  declarations: [SearchComponent],
  providers: [DataService]
})
export class SearchModule {}
