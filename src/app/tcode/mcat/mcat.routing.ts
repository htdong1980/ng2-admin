import { AuthGuard, AuthTCodeGuard } from '../../core/guard';

import { Mcat } from './mcat.component';

import { Mcat00 } from './components/mcat00';
import { Mcat30 } from './components/mcat30';
import { Mcat31 } from './components/mcat31';
import { Mcat32 } from './components/mcat32';

import { Mcat40 } from './components/mcat40';
import { Mcat41 } from './components/mcat41';
import { Mcat42 } from './components/mcat42';
import { Mcat43 } from './components/mcat43';
import { Mcat44 } from './components/mcat44';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Mcat,
    children: [
      { path: '', component: Mcat00 },
      { path: 'mcat00', component: Mcat00 },

      { path: 'mcat30', component: Mcat30 },
      { path: 'mcat31', component: Mcat31 },
      { path: 'mcat32', component: Mcat32 },

      { path: 'mcat40', component: Mcat40 },
      { path: 'mcat41', component: Mcat41 },
      { path: 'mcat42', component: Mcat42 },
      { path: 'mcat43', component: Mcat43 },
      { path: 'mcat44', component: Mcat44 }, 
    ],
  },
];

export const routing = RouterModule.forChild(routes);
