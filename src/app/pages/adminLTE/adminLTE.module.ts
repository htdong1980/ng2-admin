import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { AdminLTE } from './adminLTE.component';
import { routing } from './adminLTE.routing';

import { AdminLTEChild } from './adminLTEChild';
import { SmallBox } from './smallBox';
import { InfoBox } from './infoBox';
import { Box } from './box';
import { UserProfile } from './userProfile';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
  ],
  declarations: [
    AdminLTE,
    AdminLTEChild,
    SmallBox,
    InfoBox,
    Box,
    UserProfile
  ],
})
export class AdminLTEModule {
}
