// import { Ng2CompleterModule } from 'ng2-completer';
import { AppTranslationModule } from '../../app.translation.module';

import { Asm } from './asm.component';
import { Asm00Module } from './components/asm00/asm00.module';

import { routing } from './asm.routing';

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

    Asm00Module,
  ],
  declarations: [
    Asm,
  ],
  providers: [
  ],
  exports: [
  ],
})
export class AsmModule {
}
