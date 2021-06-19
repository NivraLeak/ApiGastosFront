import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OutcomeListComponent } from './components/outcome/outcome-list/outcome-list.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from "@angular/material/button";
@NgModule({
  declarations: [
    AppComponent,
    OutcomeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
