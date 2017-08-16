// import { Ng2CompleterModule } from 'ng2-completer';
import { AppTranslationModule } from '../../app.translation.module';

import { Mcat } from './mcat.component';
import { Mcat00Module } from './components/mcat00/mcat00.module';
import { Mcat30Module } from './components/mcat30/mcat30.module';
import { Mcat31Module } from './components/mcat31/mcat31.module';
import { Mcat32Module } from './components/mcat32/mcat32.module';

import { Mcat40Module } from './components/mcat40/mcat40.module';
import { Mcat41Module } from './components/mcat41/mcat41.module';
import { Mcat42Module } from './components/mcat42/mcat42.module';
import { Mcat43Module } from './components/mcat43/mcat43.module';
import { Mcat44Module } from './components/mcat44/mcat44.module';

import { routing } from './mcat.routing';

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

    Mcat00Module,
    Mcat30Module,
    Mcat31Module,
    Mcat32Module,

    Mcat40Module,
    Mcat41Module,
    Mcat42Module,
    Mcat43Module,
    Mcat44Module,
  ],
  declarations: [
    Mcat,
  ],
  providers: [
  ],
  exports: [
    // MjeForm,
  ],
})
export class McatModule {
}
