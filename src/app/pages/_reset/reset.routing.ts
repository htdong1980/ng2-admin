import { Routes, RouterModule } from '@angular/router';

import { ResetComponent } from './reset.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ResetComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
