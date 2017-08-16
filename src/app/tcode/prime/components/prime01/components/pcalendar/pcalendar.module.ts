// Components
import { PCalendar } from './pcalendar.component';

import { routing } from './pcalendar.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../../../../../../app.translation.module';
import { NgaModule } from '../../../../../../theme/nga.module';

import { CalendarModule } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    AppTranslationModule,
    NgaModule,
    routing,

    CalendarModule,
  ],
  declarations: [
    PCalendar,
  ],
  providers: [
  ],
})
export class PCalendarModule {
}
