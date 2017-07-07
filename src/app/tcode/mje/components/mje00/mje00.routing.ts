import { Mje00 } from './mje00.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Mje00,
  },
];

export const routing = RouterModule.forChild(routes);
