import { AppTranslationModule } from '../../app.translation.module';

import { Ebuy } from './ebuy.component';
import { Ebuy00Module } from './components/ebuy00/ebuy00.module';
import { Ebuy50Module } from './components/ebuy50/ebuy50.module';
import { Ebuy51Module } from './components/ebuy51/ebuy51.module';
import { Ebuy52Module } from './components/ebuy52/ebuy52.module';

import { routing } from './ebuy.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,

    Ebuy00Module,
    Ebuy50Module,
    Ebuy51Module,
    Ebuy52Module,

  ],
  declarations: [
    Ebuy,
  ],
  providers: [
  ],
  exports: [
  ],
})
export class EbuyModule {
}
