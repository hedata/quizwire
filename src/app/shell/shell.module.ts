import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';
import { ChatModule } from '@app/components/chat/chat.module';
import { SearchModule } from '@app/components/search/search.module';
import { EntityModule } from '@app/components/entity/entity.module';
import { LoginModule } from '@app/login/login.module';
import { HighscoreModule } from '@app/components/highscore/highscore.module';
import { HomeModule } from '@app/components/home/home.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModule,
    RouterModule,
    LoginModule,
    ChatModule,
    EntityModule,
    SearchModule,
    HighscoreModule,
    HomeModule
  ],
  declarations: [ShellComponent]
})
export class ShellModule {}
