import { Vdr } from './vdr.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'vdr',
    component: Vdr,
    children: [
      
    ],
  },
];

export const routing = RouterModule.forChild(routes);
