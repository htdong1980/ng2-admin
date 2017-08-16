// import { Ng2CompleterModule } from 'ng2-completer';
import { AppTranslationModule } from '../../app.translation.module';

import { Crm } from './crm.component';
import { Crm00Module } from './components/crm00/crm00.module';

import { routing } from './crm.routing';

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

    Crm00Module,
  ],
  declarations: [
    Crm,
  ],
  providers: [
  ],
  exports: [
    // MjeForm,
  ],
})
export class CrmModule {
}
