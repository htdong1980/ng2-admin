// import { Ng2CompleterModule } from 'ng2-completer';
import { AppTranslationModule } from '../../app.translation.module';

import { Hcm } from './hcm.component';
import { Hcm00Module } from './components/hcm00/hcm00.module';

import { routing } from './hcm.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // , ReactiveFormsModule
import { NgaModule } from '../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    AppTranslationModule,
    NgaModule,
    // Ng2CompleterModule,
    routing,

    Hcm00Module,
  ],
  declarations: [
    Hcm,
  ],
  providers: [
  ],
  exports: [
    // MjeForm,
  ],
})
export class HcmModule {
}
