// import { Ng2CompleterModule } from 'ng2-completer';
import { AppTranslationModule } from '../../app.translation.module';

import { Mje } from './mje.component';
import { Mje00Module } from './components/mje00/mje00.module';

import { Mje11Module } from './components/mje11/mje11.module';
import { Mje12Module } from './components/mje12/mje12.module';
import { Mje13Module } from './components/mje13/mje13.module';
import { Mje14Module } from './components/mje14/mje14.module';
import { Mje15Module } from './components/mje15/mje15.module';
import { Mje16Module } from './components/mje16/mje16.module';
import { Mje17Module } from './components/mje17/mje17.module';
import { Mje18Module } from './components/mje18/mje18.module';

import { Mje21Module } from './components/mje21/mje21.module';
// import { MjeForm } from './components/mjeForm';

import { routing } from './mje.routing';

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

    Mje00Module,

    Mje11Module,
    Mje12Module,
    Mje13Module,
    Mje14Module,
    Mje15Module,
    Mje16Module,
    Mje17Module,
    Mje18Module,

    Mje21Module,
  ],
  declarations: [
    Mje,
    // MjeForm,
  ],
  providers: [
  ],
  exports: [
    // MjeForm,
  ],
})
export class MjeModule {
}
