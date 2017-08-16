// Components
import { InputGroup } from './inputGroup.component';

import { routing } from './inputGroup.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../../../../../../app.translation.module';
import { NgaModule } from '../../../../../../theme/nga.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    AppTranslationModule,
    NgaModule,
    routing,
  ],
  declarations: [
    InputGroup,
  ],
  providers: [
  ],
})
export class InputGroupModule {
}
