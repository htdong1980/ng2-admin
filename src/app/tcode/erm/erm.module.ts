// import { Ng2CompleterModule } from 'ng2-completer';
import { AppTranslationModule } from '../../app.translation.module';

import { Erm } from './erm.component';
import { Erm00Module } from './components/erm00/erm00.module';

import { routing } from './erm.routing';

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

    Erm00Module,
  ],
  declarations: [
    Erm,
  ],
  providers: [
  ],
  exports: [
    // MjeForm,
  ],
})
export class ErmModule {
}
