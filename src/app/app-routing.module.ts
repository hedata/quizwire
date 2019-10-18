import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment, UrlSegmentGroup, Route } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { AuthenticationGuard } from './core';

const routes: Routes = [
  // Fallback when no prior route is matched

  { path: '**', component: ShellComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
