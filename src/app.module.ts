import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Tab }   from './tabs/tab.component';
import { Tabs }   from './tabs/tabs.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,Tab,Tabs ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
