import { AuthGuard, AuthTCodeGuard } from '../../core/guard';

import { Mje } from './mje.component';
import { Mje00 } from './components/mje00';

import { Mje11 } from './components/mje11';
import { Mje12 } from './components/mje12';
import { Mje13 } from './components/mje13';
import { Mje14 } from './components/mje14';
import { Mje15 } from './components/mje15';
import { Mje16 } from './components/mje16';
import { Mje17 } from './components/mje17';
import { Mje18 } from './components/mje18';

import { Mje21 } from './components/mje21';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Mje,
    children: [
      { path: '', component: Mje00 },           // Management
      { path: 'mje00', canActivate: [AuthTCodeGuard], component: Mje00 },      // Management

      { path: 'mje11', canActivate: [AuthTCodeGuard], component: Mje11 },      // Create
      { path: 'mje12', canActivate: [AuthTCodeGuard], component: Mje12 },      // View Lead
      { path: 'mje12/:id', canActivate: [AuthTCodeGuard], component: Mje12 },  // View Form
      { path: 'mje13', canActivate: [AuthTCodeGuard], component: Mje13 },      // Edit Lead
      { path: 'mje13/:id', canActivate: [AuthTCodeGuard], component: Mje13 },  // Edit Form
      { path: 'mje14', canActivate: [AuthTCodeGuard], component: Mje14 },      // Disable Lead
      { path: 'mje14/:id', canActivate: [AuthTCodeGuard], component: Mje14 },  // Disable Form
      { path: 'mje15', canActivate: [AuthTCodeGuard], component: Mje15 },      // Enable Lead
      { path: 'mje15/:id', canActivate: [AuthTCodeGuard], component: Mje15 },  // Enable Form
      { path: 'mje16', canActivate: [AuthTCodeGuard], component: Mje16 },      // View Changes Lead
      { path: 'mje16/:id', canActivate: [AuthTCodeGuard], component: Mje16 },  // View Changes Form
      { path: 'mje17', canActivate: [AuthTCodeGuard], component: Mje17 },      // Post Lead
      { path: 'mje17/:id', canActivate: [AuthTCodeGuard], component: Mje17 },  // Post Form
      { path: 'mje18', canActivate: [AuthTCodeGuard], component: Mje18 },      // Revert Lead
      { path: 'mje18/:id', canActivate: [AuthTCodeGuard], component: Mje18 },  // Revert Form

      { path: 'mje21', canActivate: [AuthTCodeGuard], component: Mje21 },      // Create
    ],
  },
];

export const routing = RouterModule.forChild(routes);
