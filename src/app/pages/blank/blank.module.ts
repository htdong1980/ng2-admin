import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { BlankComponent } from './blank.component';
import { routing } from './blank.routing';

import { BlankChild } from './blankChild';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
  ],
  declarations: [
    BlankComponent,
    BlankChild,
  ],
})
export class BlankModule {
}
