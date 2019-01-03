import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ChatRoutingModule,
    FormsModule
  ],
  declarations: [ChatComponent],
  providers: [DataService]
})
export class ChatModule {}
