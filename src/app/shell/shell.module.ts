import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';
import { ChatModule } from '@app/chat/chat.module';
import { SearchModule } from '@app/search/search.module';
import { EntityModule } from '@app/entity/entity.module';
import { LoginModule } from '@app/login/login.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModule,
    RouterModule,
    ChatModule,
    SearchModule,
    EntityModule,
    LoginModule
  ],
  declarations: [ShellComponent]
})
export class ShellModule {}
