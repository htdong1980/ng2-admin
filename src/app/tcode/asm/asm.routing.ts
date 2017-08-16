import { AuthGuard, AuthTCodeGuard } from '../../core/guard';

import { Asm } from './asm.component';
import { Asm00 } from './components/asm00';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Asm,
    children: [
      { path: '', component: Asm00 }, 
      { path: 'asm00', component: Asm00 },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
