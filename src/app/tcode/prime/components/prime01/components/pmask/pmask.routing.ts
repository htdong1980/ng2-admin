import { PMask } from './pmask.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'mask',
    component: PMask,
  },
];

export const routing = RouterModule.forChild(routes);
