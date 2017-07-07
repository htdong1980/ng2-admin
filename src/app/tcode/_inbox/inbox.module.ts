import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InboxService } from './inbox.service';
import { Inbox } from './inbox.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    Ng2SmartTableModule,
    HttpModule,
  ],
  declarations: [
    Inbox,
  ],
  providers: [
    InboxService,
  ],
})
export class InboxModule {
}
