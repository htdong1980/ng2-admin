// Model Services
import { MjeService } from '../../../../core';

// Components
import { MjeList } from './mjeList/mjeList.component';
import { Mje00 } from './mje00.component';

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
    Mje00,
    MjeList,
  ],
  providers: [
    MjeService,
  ],
})
export class Mje00Module {
}
