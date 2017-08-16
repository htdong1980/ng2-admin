import { PInputSwitch } from './pinputSwitch.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inputSwitch',
    component: PInputSwitch,
  },
];

export const routing = RouterModule.forChild(routes);
