// Import all directives

import {Tabs} from './directives/tabs.component';
import {Tab} from './directives/tab.component';
// Export all directives
export * from './directives/tab.component';
export * from './directives/tabs.component';

// Export convenience property
export const DIRECTIVES: any[] = [
  Tabs,
  Tab
];
