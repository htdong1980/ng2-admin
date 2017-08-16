import { AuthGuard, AuthTCodeGuard } from '../../core/guard';

import { Erm } from './erm.component';
import { Erm00 } from './components/erm00';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Erm,
    children: [
      { path: '', component: Erm00 },           // Management
      { path: 'erm00', component: Erm00 },      // Management
    ],
  },
];

export const routing = RouterModule.forChild(routes);
