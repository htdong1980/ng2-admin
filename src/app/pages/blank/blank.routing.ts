import { Routes, RouterModule } from '@angular/router';

import { BlankComponent } from './blank.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
    //   { path: 'blankchild', component: BlankchildComponent },
    ],
  }];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
