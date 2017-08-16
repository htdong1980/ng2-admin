// import { Ng2CompleterModule } from 'ng2-completer';
import { AppTranslationModule } from '../../app.translation.module';

import { Cbn } from './cbn.component';
import { Cbn00Module } from './components/cbn00/cbn00.module';

import { routing } from './cbn.routing';

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

    Cbn00Module,
  ],
  declarations: [
    Cbn,
  ],
  providers: [
  ],
  exports: [
    // MjeForm,
  ],
})
export class CbnModule {
}
