import { Vdr01Lead } from './components';
import { Vdr01 } from './vdr01.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'vdr01',
    component: Vdr01,
    children: [
      { path: '', component: Vdr01Lead },
    ],
  }];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
