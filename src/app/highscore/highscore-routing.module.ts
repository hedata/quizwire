import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { HighscoreComponent } from './highscore.component';

const routes: Routes = [{ path: 'highscore/:id', component: HighscoreComponent, data: { title: extract('Higscore') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HighscoreRoutingModule {}
