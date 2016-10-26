import {Component,Input,ViewEncapsulation,ContentChildren,QueryList,Output,EventEmitter} from '@angular/core';
import {Tab} from './tab.component';
@Component({
  selector: 'my-tabs',
  template: `
  <ul class="tab">
    <li *ngFor="let tab of tabs;let i = index;"  (click)="ToggleActive(i)"><a [class.active]='tab.Active'>{{tab.Title}}</a> </li>
  </ul>
  <div class="tab-content">
    <ng-content></ng-content>
  </div>
  `,
  styles:[`/* Style the list */
ul.tab {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
}

/* Float the list items side by side */
ul.tab li {float: left;}

/* Style the links inside the list items */
ul.tab li a {
    display: inline-block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    transition: 0.3s;
    font-size: 17px;
}

/* Change background color of links on hover */
ul.tab li a:hover {background-color: #ddd;}

/* Create an active/current tablink class */
ul.tab li a:focus, .active {background-color: #ccc;}

/* Style the tab content */
.tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
}`]
})
export class Tabs {
  @ContentChildren(Tab) childrenTabs: QueryList<Tab>;;
  tabs: Tab[];
  @Input()
  selectedTabIndex:number;
  @Output()
  onTabSelected = new EventEmitter<number>();
  constructor(){
    this.tabs=[];
    
  }
  ngAfterContentInit(){
    this.childrenTabs.forEach(tab=>this.AddTab(tab));
    
    if(this.selectedTabIndex>0){
      this.ToggleActive(this.selectedTabIndex);
    }
  }
  AddTab(tab: Tab){
    if(this.tabs.length==0){
      tab.Active =true;
    }
    this.tabs.push(tab);
  }
  ToggleActive(tabIndex:number){
    if(tabIndex>this.tabs.length-1){
         throw "Selected tab index is out of range ";
    }
    this.tabs.forEach(tab=>{tab.Active=false});
    this.tabs[tabIndex].Active=true;
    this.selectedTabIndex = tabIndex;
    this.onTabSelected.emit(tabIndex);
  }
  
}
