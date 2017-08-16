// Error
import { Err00Module } from './err/components/err00/err00.module';
import { Err01Module } from './err/components/err01/err01.module';
import { Err02Module } from './err/components/err02/err02.module';
import { Err03Module } from './err/components/err03/err03.module';

// My Approval
import { Mcat31Module } from './mcat/components/mcat31/mcat31.module';
import { Mcat32Module } from './mcat/components/mcat32/mcat32.module';

// My Request
import { Mcat41Module } from './mcat/components/mcat41/mcat41.module';
import { Mcat42Module } from './mcat/components/mcat42/mcat42.module';
import { Mcat43Module } from './mcat/components/mcat43/mcat43.module';
import { Mcat44Module } from './mcat/components/mcat44/mcat44.module';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgaModule } from '../theme/nga.module';

// Modules export here
const SHARED_MODULES = [
  // Error
  Err00Module,
  Err01Module,
  Err02Module,
  Err03Module,

  // My Approval
  Mcat31Module,   // Inbox
  Mcat32Module,   // Outbox

  // My Request
  Mcat41Module,   // Draft
  Mcat42Module,   // In progress
  Mcat43Module,   // Documenting
  Mcat44Module,   // Finished

];

@NgModule({
  imports: [
    NgaModule,
    ...SHARED_MODULES,
  ],
  declarations: [
    // ...SHARED_COMPONENTS,
  ],
  exports: [
    // ...SHARED_COMPONENTS,
  ],
  providers: [
    // ....SHARED_SERVICES,
  ],
})
export class TCodeModule {
}
