// Components
import { PChips } from './pchips.component';

import { routing } from './pchips.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../../../../../../app.translation.module';
import { NgaModule } from '../../../../../../theme/nga.module';

import { ChipsModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    AppTranslationModule,
    NgaModule,
    routing,

    ChipsModule,

  ],
  declarations: [
    PChips,
  ],
  providers: [
  ],
})
export class PChipsModule {
}
