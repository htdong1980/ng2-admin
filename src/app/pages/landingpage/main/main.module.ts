import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../app.translation.module';
import { NgaModule } from '../../../theme/nga.module';

import { MainComponent } from './main.component';
import { routing } from './main.routing';

import { MainChild } from './mainChild';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
  ],
  declarations: [
    MainComponent,
    MainChild,
  ],
})
export class MainModule {
}
