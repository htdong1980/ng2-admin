// Components
import { Asm00 } from './asm00.component';

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
    Asm00,
  ],
  providers: [
  ],
})
export class Asm00Module {
}
