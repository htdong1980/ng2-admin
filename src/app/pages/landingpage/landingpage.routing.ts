import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landingpage.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  }
];

export const routing = RouterModule.forChild(routes);
