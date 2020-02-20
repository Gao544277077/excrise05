import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SurveryComponent } from './survery/survery.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveryComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
