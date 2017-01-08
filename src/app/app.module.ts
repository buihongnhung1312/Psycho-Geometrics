import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BodyModule } from './body/body.module';

@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BodyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
