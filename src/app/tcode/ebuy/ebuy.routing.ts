import { Ebuy } from './ebuy.component';
import { Ebuy00 } from './components/ebuy00';
import { Ebuy50 } from './components/ebuy50';
import { Ebuy51 } from './components/ebuy51';
import { Ebuy52 } from './components/ebuy52';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Ebuy,
    children: [
      { path: '', component: Ebuy00 },
      { path: 'ebuy00', component: Ebuy00 },
      { path: 'ebuy50', component: Ebuy50 },
      { path: 'ebuy51', component: Ebuy51 },
      { path: 'ebuy52', component: Ebuy52 },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
