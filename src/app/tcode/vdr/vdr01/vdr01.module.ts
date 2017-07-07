import { Vdr01Lead } from './components';
import { Vdr01 } from './vdr01.component';
import { routing } from './vdr01.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../app.translation.module';
import { NgaModule } from '../../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
  ],
  declarations: [
    Vdr01Lead,
    Vdr01,
  ],
})
export class Vdr01Module {
}
