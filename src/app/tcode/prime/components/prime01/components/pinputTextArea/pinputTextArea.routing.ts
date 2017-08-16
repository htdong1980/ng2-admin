import { PInputTextArea } from './pinputTextArea.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inputTextArea',
    component: PInputTextArea,
  },
];

export const routing = RouterModule.forChild(routes);
