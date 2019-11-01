import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntityComponent } from './entity.component';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { DataService } from '@app/services/data.service';
import { Property18_ImageComponent } from '@app/components/entity/claims/p18_image/p18_image.component';

@NgModule({
  imports: [ReactiveFormsModule, NgbModule, CommonModule, TranslateModule, CoreModule, SharedModule, FormsModule],
  exports: [EntityComponent],
  declarations: [EntityComponent, Property18_ImageComponent],
  providers: [DataService]
})
export class EntityModule {}
