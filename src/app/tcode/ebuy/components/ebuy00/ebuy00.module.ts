// Components
import { Ebuy00 } from './ebuy00.component';

// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../../app.translation.module';
import { NgaModule } from '../../../../theme/nga.module';

import { MenubarModule, MenuItem } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    MenubarModule,
  ],
  declarations: [
    Ebuy00,
  ],
  providers: [
  ],
})
export class Ebuy00Module {
}
