import { Routes, RouterModule } from '@angular/router';

import { AdminLTE } from './adminLTE.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AdminLTE,
    children: [
    //   { path: 'blankchild', component: BlankchildComponent },
    ],
  }];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
