import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';
import { ChatModule } from '@app/chat/chat.module';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, RouterModule, ChatModule],
  declarations: [ShellComponent]
})
export class ShellModule {}
