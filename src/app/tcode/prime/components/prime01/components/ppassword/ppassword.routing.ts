import { PPassword } from './ppassword.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'password',
    component: PPassword,
  },
];

export const routing = RouterModule.forChild(routes);
