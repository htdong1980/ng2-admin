import { PCalendar } from './pcalendar.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pcalendar',
    component: PCalendar,
  },
];

export const routing = RouterModule.forChild(routes);
