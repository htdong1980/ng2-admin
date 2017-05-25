import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';

import { LandingPageComponent } from './landingpage.component';
import { routing } from './landingpage.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    routing
  ],
  declarations: [
    LandingPageComponent
  ]
})
export class LandingPageModule {}