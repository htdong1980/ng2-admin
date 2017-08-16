import { PDropdown } from './pdropdown.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pdropdown',
    component: PDropdown,
  },
];

export const routing = RouterModule.forChild(routes);
