import { Vdr01Module } from './vdr01';
import { Vdr } from './vdr.component';
import { routing } from './vdr.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    Vdr01Module,
    routing,
  ],
  declarations: [
    Vdr,
  ],
})
export class VdrModule {}
