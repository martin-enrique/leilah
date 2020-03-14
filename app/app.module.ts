import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BabyOwlsComponent } from './baby-owls/baby-owls.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BabyOwlsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
