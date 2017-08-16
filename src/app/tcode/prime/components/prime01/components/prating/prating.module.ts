// Components
import { PRating } from './prating.component';

import { routing } from './prating.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../../../../../../app.translation.module';
import { NgaModule } from '../../../../../../theme/nga.module';

import { RatingModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    AppTranslationModule,
    NgaModule,
    routing,

    RatingModule,

  ],
  declarations: [
    PRating,
  ],
  providers: [
  ],
})
export class PRatingModule {
}
