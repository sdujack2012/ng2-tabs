import { Component } from '@angular/core';
import { Tab }   from './tabs/tab.component';
import { Tabs }   from './tabs/tabs.component';


@Component({
  selector: 'my-app',
  template: `<my-tabs selectedTabIndex="1">
    <my-tab Title="Tab1">
      <h1>my first tab</h1>
    </my-tab>
    <my-tab Title="Tab2">
      <h1>my second tab</h1>
    </my-tab>
  </my-tabs>`
})
export class AppComponent { }
