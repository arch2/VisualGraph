import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { GraphComponent } from './graph/graph.component';
import { LayoutComponent } from './layout/layout.component';
import { BaseComponent } from './base/base.component';
import { GraphRouteComponent } from './graph-route/graph-route.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GraphComponent,
    LayoutComponent,
    BaseComponent,
    GraphRouteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
