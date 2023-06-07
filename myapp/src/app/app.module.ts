;
import { HomeeComponent } from './component/homee/homee.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
//import { http}

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HomeComponent,
    HomeeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
