import { AuthGuard, AuthTCodeGuard } from '../../core/guard';

import { Cbn } from './cbn.component';
import { Cbn00 } from './components/cbn00';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Cbn,
    children: [
      { path: '', component: Cbn00 },           // Management
      { path: 'cbn00', component: Cbn00 },      // Management
    ],
  },
];

export const routing = RouterModule.forChild(routes);
