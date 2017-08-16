// Components
import { Prime01 } from './prime01.component';
import { InputGroupModule } from './components/inputGroup/inputGroup.module';
import { PCalendarModule } from './components/pcalendar/pcalendar.module';
import { PChipsModule } from './components/pchips/pchips.module';
import { PDropdownModule } from './components/pdropdown/pdropdown.module';
import { PInputSwitchModule } from './components/pinputSwitch/pinputSwitch.module';
import { PInputTextAreaModule } from './components/pinputTextArea/pinputTextArea.module';
import { PMaskModule } from './components/pmask/pmask.module';
import { PPasswordModule } from './components/ppassword/ppassword.module';
import { PRatingModule } from './components/prating/prating.module';
import { PSpinnerModule } from './components/pspinner/pspinner.module';

// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../../../../app.translation.module';
import { NgaModule } from '../../../../theme/nga.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,         // Require for <router-outlet>
    AppTranslationModule,
    NgaModule,

    InputGroupModule,
    PCalendarModule,
    PChipsModule,
    PDropdownModule,
    PInputSwitchModule,
    PInputTextAreaModule,
    PMaskModule,
    PPasswordModule,
    PRatingModule,
    PSpinnerModule
  ],
  declarations: [
    Prime01,

  ],
  providers: [
  ],
})
export class Prime01Module {
}
