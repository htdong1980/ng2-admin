import { AuthGuard, AuthTCodeGuard } from '../../core/guard';

import { Crm } from './crm.component';
import { Crm00 } from './components/crm00';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Crm,
    children: [
      { path: '', component: Crm00 },           // Management
      { path: 'crm00', component: Crm00 },      // Management
    ],
  },
];

export const routing = RouterModule.forChild(routes);
