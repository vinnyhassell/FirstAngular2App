import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventbindingComponent } from './eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    TwowaybindingComponent,
    EventbindingComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
