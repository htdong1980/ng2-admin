import { RefModal } from './components/refModal/refModal.component';
//import { MjeFormEntryItemRef } from './components/mjeFormEntryItemRef.component';
//import { MjeFormEntryItem } from './components/mjeFormEntryItem.component';

import { MjeFormObject } from './components/mjeFormObject.component';
import { MjeFormJournal } from './components/mjeFormJournal.component';
import { MjeFormDocument } from './components/mjeFormDocument.component';
import { MjeForm } from './mjeForm.component';

import { AccountService } from '../../../../core/services/account.service';
import { LegalEntityService } from '../../../../core/services/legalEntity.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../../app.translation.module';
import { NgaModule } from '../../../../theme/nga.module';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2CompleterModule } from 'ng2-completer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    ReactiveFormsModule,
    // NgbModalModule,       // For RefModal
    Ng2CompleterModule,
  ],
  declarations: [
    RefModal,
    //MjeFormEntryItemRef,
    //MjeFormEntryItem,
    MjeFormObject,
    MjeFormJournal,
    MjeFormDocument,
    MjeForm,
  ],
  providers: [
    LegalEntityService,
    AccountService,
  ],
  exports: [
    //MjeFormEntryItemRef,
    //MjeFormEntryItem,
    MjeFormObject,
    MjeFormJournal,
    MjeFormDocument,
    MjeForm,
  ],
  entryComponents: [
    RefModal,
  ],
})
export class MjeFormModule {
}
