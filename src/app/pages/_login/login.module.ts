import { routing } from './login.routing';
import { Login } from './login.component';
import { NgaModule } from '../../theme/nga.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    Login,
  ],
  providers: [
  ],
})
export class LoginModule {}
