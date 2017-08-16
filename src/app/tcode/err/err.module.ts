import { AppTranslationModule } from '../../app.translation.module';

import { Err } from './err.component';
import { Err00Module } from './components/err00/err00.module';
import { Err01Module } from './components/err01/err01.module';
import { Err02Module } from './components/err02/err02.module';
import { Err03Module } from './components/err03/err03.module';

import { routing } from './err.routing';

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

    Err00Module,
    Err01Module,
    Err02Module,
    Err03Module,

  ],
  declarations: [
    Err,
  ],
  providers: [
  ],
  exports: [
  ],
})
export class ErrModule {
}
