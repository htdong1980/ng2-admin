import { PSpinner } from './pspinner.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'spinner',
    component: PSpinner,
  },
];

export const routing = RouterModule.forChild(routes);
