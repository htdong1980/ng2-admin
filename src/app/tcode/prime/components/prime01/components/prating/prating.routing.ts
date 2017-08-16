import { PRating } from './prating.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'rating',
    component: PRating,
  },
];

export const routing = RouterModule.forChild(routes);
