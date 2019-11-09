import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntityComponent } from './entity.component';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { DataService } from '@app/services/data.service';
import { ImagesComponent } from '@app/components/entity/claims/images/images.component';
import { ClaimtypeSelectorComponent } from './claims/claimtypeselector/claimtypeselector.component';
import { TimeseriesComponent } from './claims/timeseries/timeseries.component';

@NgModule({
  imports: [ReactiveFormsModule, NgbModule, CommonModule, TranslateModule, CoreModule, SharedModule, FormsModule],
  exports: [EntityComponent],
  declarations: [EntityComponent, ImagesComponent,TimeseriesComponent,ClaimtypeSelectorComponent],
  providers: [DataService]
})
export class EntityModule {}
