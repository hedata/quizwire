import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { SearchComponent } from './search.component';

import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent, data: { title: extract('Rebot') } }
  ])
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SearchRoutingModule {}
