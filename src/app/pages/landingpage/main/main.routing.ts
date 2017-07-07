import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
    //   { path: 'blankchild', component: BlankchildComponent },
    ],
  }];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
