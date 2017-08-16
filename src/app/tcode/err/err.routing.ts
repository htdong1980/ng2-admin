import { Err } from './err.component';
import { Err00 } from './components/err00';
import { Err01 } from './components/err01';
import { Err02 } from './components/err02';
import { Err03 } from './components/err03';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Err,
    children: [
      { path: '', component: Err00 },
      { path: 'err00', component: Err00 },
      { path: 'err01', component: Err01 },
      { path: 'err02', component: Err02 },
      { path: 'err03', component: Err03 },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
