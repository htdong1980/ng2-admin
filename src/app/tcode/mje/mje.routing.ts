import { Mje } from './mje.component';
import { Mje00 } from './components/mje00';
import { Mje01 } from './components/mje01';
import { Mje02 } from './components/mje02';
import { Mje03 } from './components/mje03';
import { Mje04 } from './components/mje04';
import { Mje05 } from './components/mje05';
import { Mje06 } from './components/mje06';
import { Mje11 } from './components/mje11';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Mje,
    children: [
      { path: '', component: Mje00 },           // Management
      { path: 'mje00', component: Mje00 },      // Management
      { path: 'mje01', component: Mje01 },      // Create
      { path: 'mje02', component: Mje02 },      // View Lead
      { path: 'mje02/:id', component: Mje02 },  // View Form
      { path: 'mje03', component: Mje03 },      // Edit Lead
      { path: 'mje03/:id', component: Mje03 },  // Edit Form
      { path: 'mje04', component: Mje04 },      // Disable Lead
      { path: 'mje04/:id', component: Mje04 },  // Disable Form
      { path: 'mje05', component: Mje05 },      // Enable Lead
      { path: 'mje05/:id', component: Mje05 },  // Enable Form
      { path: 'mje06', component: Mje06 },      // View Changes Lead
      { path: 'mje06/:id', component: Mje06 },  // View Changes Form

      { path: 'mje11', component: Mje11 },      // Create
    ],
  },
];

export const routing = RouterModule.forChild(routes);
