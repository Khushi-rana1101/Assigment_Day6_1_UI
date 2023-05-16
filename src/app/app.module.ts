import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicSwitchComponent } from './Assignment1/dynamic-switch/dynamic-switch.component';
import { StyleSheetComponent } from './Assigment2/style-sheet/style-sheet.component';
import { NgclassexampleComponent } from './Assignment3/ngclassexample/ngclassexample.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicSwitchComponent,
    StyleSheetComponent,
    NgclassexampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
