// Components
import { PInputTextArea } from './pinputTextArea.component';

import { routing } from './pinputTextArea.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../../../../../../app.translation.module';
import { NgaModule } from '../../../../../../theme/nga.module';

import { InputTextareaModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    AppTranslationModule,
    NgaModule,
    routing,
    
    InputTextareaModule,
  ],
  declarations: [
    PInputTextArea,
  ],
  providers: [
  ],
})
export class PInputTextAreaModule {
}
