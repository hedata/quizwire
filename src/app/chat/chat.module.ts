import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ChatComponent } from './chat.component';
import { DataService } from '../services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [ReactiveFormsModule, NgbModule, CommonModule, TranslateModule, CoreModule, SharedModule, FormsModule],
  declarations: [ChatComponent],
  exports: [ChatComponent],
  providers: [DataService]
})
export class ChatModule {}
