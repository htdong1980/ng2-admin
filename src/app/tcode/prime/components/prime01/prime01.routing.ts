import { Prime01 } from './prime01.component';
import { InputGroup } from './components/inputGroup/inputGroup.component';
import { PCalendar } from './components/pcalendar/pcalendar.component';
import { PChips } from './components/pchips/pchips.component';
import { PDropdown } from './components/pdropdown/pdropdown.component';
import { PInputSwitch } from './components/pinputSwitch/pinputSwitch.component';
import { PInputTextArea } from './components/pinputTextArea/pinputTextArea.component';
import { PMask } from './components/pmask/pmask.component';
import { PPassword } from './components/ppassword/ppassword.component';
import { PRating } from './components/prating/prating.component';
import { PSpinner } from './components/pspinner/pspinner.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime01,
    children: [
      { path: '', component: Prime01 },
      { path: 'inputgroup', component: InputGroup },
      { path: 'pcalendar', component: PCalendar },
      { path: 'pchips', component: PChips },
      { path: 'pdropdown', component: PDropdown },
      { path: 'inputswitch', component: PInputSwitch },
      { path: 'inputtextarea', component: PInputSwitch },
      { path: 'mask', component: PMask },
      { path: 'password', component: PPassword },
      { path: 'rating', component: PRating },
      { path: 'spinner', component: PSpinner },      
    ],
  },
];

export const routing = RouterModule.forChild(routes);
