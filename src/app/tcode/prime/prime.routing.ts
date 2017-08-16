import { Prime } from './prime.component';

import { Prime00 } from './components/prime00';
// import { Prime01 } from './components/prime01';
// import { Prime02 } from './components/prime02';
// import { Prime03 } from './components/prime03';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime,
    children: [
      { path: '', component: Prime00 },
      { path: 'prime00', component: Prime00 },
      { path: 'prime01', loadChildren: './components/prime01/prime01.module#Prime01Module' },
      // { path: 'prime02', component: Prime02 },
      // { path: 'prime03', component: Prime03 },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
