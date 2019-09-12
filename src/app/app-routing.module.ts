import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment, UrlSegmentGroup, Route } from '@angular/router';

export function tagMatcher(url: UrlSegment[], group: UrlSegmentGroup, route: Route) {
  // console.log('tagMatcher', url);

  if (url.length < 1) return null;
  if (url[0].path !== 'search') return null;

  const posParams = {};
  for (let idx = 1; idx < url.length; idx++) {
    posParams['tag-' + idx] = url[idx];
  }

  // type UrlMatchResult = {
  //   consumed: UrlSegment[];
  //   posParams?: {
  //     [name: string]: UrlSegment;
  //   };
  // };

  return { consumed: url, posParams: posParams };
};


const routes: Routes = [
  // Fallback when no prior route is matched


  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
