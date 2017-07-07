import { AccountService } from '../core/services/account.service';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../app.translation.module';

import {
  CbAccounts,
} from './components';

const GK_COMPONENTS = [
  CbAccounts,
];

@NgModule({
  declarations: [
    ...GK_COMPONENTS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppTranslationModule,
  ],
  exports: [
    ...GK_COMPONENTS,
  ],
  providers: [
    AccountService,
  ],
})
export class GkControls {

}
