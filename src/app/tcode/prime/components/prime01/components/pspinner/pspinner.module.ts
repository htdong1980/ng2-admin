// Components
import { PSpinner } from './pspinner.component';

import { routing } from './pspinner.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../../../../../../app.translation.module';
import { NgaModule } from '../../../../../../theme/nga.module';

import { SpinnerModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    AppTranslationModule,
    NgaModule,
    routing,

    SpinnerModule,
  ],
  declarations: [
    PSpinner,
  ],
  providers: [
  ],
})
export class PSpinnerModule {
}
