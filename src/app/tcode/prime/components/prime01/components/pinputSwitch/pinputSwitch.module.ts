// Components
import { PInputSwitch } from './pinputSwitch.component';

import { routing } from './pinputSwitch.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../../../../../../app.translation.module';
import { NgaModule } from '../../../../../../theme/nga.module';

import { InputSwitchModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    AppTranslationModule,
    NgaModule,
    routing,

    InputSwitchModule,
  ],
  declarations: [
    PInputSwitch,
  ],
  providers: [
  ],
})
export class PInputSwitchModule {
}
