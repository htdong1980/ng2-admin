import { Mje01 } from './mje01.component';
import { MjeFormModule } from '../mjeForm/mjeForm.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../../app.translation.module';
import { NgaModule } from '../../../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppTranslationModule,
    NgaModule,
    MjeFormModule,
  ],
  declarations: [
    Mje01,
  ],
  providers: [
  ],
})
export class Mje01Module {
}
