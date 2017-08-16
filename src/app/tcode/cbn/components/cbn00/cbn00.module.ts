// Model Services
import { MjeService } from '../../../../core';
import { CbnService } from '../../../../core';

// Components
import { CbnList } from './cbnList/cbnList.component';
import { Cbn00 } from './cbn00.component';

// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../../app.translation.module';
import { NgaModule } from '../../../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
  ],
  declarations: [
    Cbn00,
    CbnList,
  ],
  providers: [
    MjeService,
    CbnService,
  ],
})
export class Cbn00Module {
}
