import { DataTableModule } from 'angular2-datatable';
import { DataTablesService } from './dataTables.service';
import { DataFilterPipe } from './data-filter.pipe';
import { Outbox } from './outbox.component';

import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    DataTableModule,
    HttpModule,
  ],
  declarations: [
    Outbox,
    DataFilterPipe,
  ],
  providers: [
    DataTablesService,
  ],
})
export class OutboxModule {
}
