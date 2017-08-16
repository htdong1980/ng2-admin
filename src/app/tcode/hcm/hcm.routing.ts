import { AuthGuard, AuthTCodeGuard } from '../../core/guard';

import { Hcm } from './hcm.component';
import { Hcm00 } from './components/hcm00';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Hcm,
    children: [
      { path: '', component: Hcm00 },           // Management
      { path: 'hcm00', component: Hcm00 },      // Management
    ],
  },
];

export const routing = RouterModule.forChild(routes);
