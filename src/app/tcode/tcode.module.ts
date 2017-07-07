// My Approval
import { InboxModule } from './_inbox';
import { OutboxModule } from './_outbox';

// My Request
import { DraftModule } from './_draft';
import { InProgressModule } from './_inProgress';
import { DocumentingModule } from './_documenting';
import { FinishedModule } from './_finished';

// tcode
// import { MjeModule } from './mje';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgaModule } from '../theme/nga.module';

// Modules export here
const SHARED_MODULES = [
  // My Approval
  InboxModule,
  OutboxModule,

  // My Request
  DraftModule,
  InProgressModule,
  DocumentingModule,
  FinishedModule,

  // MjeModule,
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
