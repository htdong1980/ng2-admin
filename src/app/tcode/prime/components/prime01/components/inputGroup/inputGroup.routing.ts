import { InputGroup } from './inputGroup.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inputgroup',
    component: InputGroup,
  },
];

export const routing = RouterModule.forChild(routes);
