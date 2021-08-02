import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { GraphRouteComponent } from './graph-route/graph-route.component';

const routes: Routes = [
  { path: 'graph', component: GraphRouteComponent },
  { path: '', component: BaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
