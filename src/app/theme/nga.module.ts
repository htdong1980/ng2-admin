import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgUploaderModule } from 'ngx-uploader';
import { AppTranslationModule } from '../app.translation.module';

import {
  BaThemeConfig,
} from './theme.config';

import {
  BaThemeConfigProvider,
} from './theme.configProvider';

import {
  BaAlert,
  BaAmChart,
  BaBackTop,
  BaCard,
  BaChartistChart,
  BaCheckbox,
  BaContentTop,
  BaFullCalendar,
  BaMenuItem,
  BaMenu,
  BaMsgCenter,
  BaMultiCheckbox,
  BaPageTop,
  BaPictureUploader,
  BaSidebar,
  BaFileUploader,
  BaPageError,
  BcBox,
  BcSmallBox,
  BcInfoBox,
  BcBlock,
  BcAlert,
  BcCallout,
  BcComboBox,
  BcIndividual,
  BcCollective,
  BcLead,
  BcUpfile,
  BcDataTable,
} from './components';

import { BaCardBlur } from './components/baCard/baCardBlur.directive';

import {
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun,
  BcDatePicker,
} from './directives';

import {
  BaAppPicturePipe,
  BaKameleonPicturePipe,
  BaProfilePicturePipe,
  BcOrderBy,
  BcFormat,
} from './pipes';

import {
  BaAlertService,
  BaImageLoaderService,
  BaMenuService,
  BaThemePreloader,
  BaThemeSpinner,
  BcPagerService,
  BcUtilsService,
} from './services';

import {
  EmailValidator,
  EqualPasswordsValidator,
} from './validators';

const NGA_COMPONENTS = [
  BaAlert,
  BaAmChart,
  BaBackTop,
  BaCard,
  BaChartistChart,
  BaCheckbox,
  BaContentTop,
  BaFullCalendar,
  BaMenuItem,
  BaMenu,
  BaMsgCenter,
  BaMultiCheckbox,
  BaPageTop,
  BaPictureUploader,
  BaSidebar,
  BaFileUploader,
  BaPageError,
  BcBox,
  BcSmallBox,
  BcInfoBox,
  BcBlock,
  BcAlert,
  BcCallout,
  BcComboBox,
  BcIndividual,
  BcCollective,
  BcLead,
  BcUpfile,
  BcDataTable,
];

const NGA_DIRECTIVES = [
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun,
  BaCardBlur,
  BcDatePicker,
];

const NGA_PIPES = [
  BaAppPicturePipe,
  BaKameleonPicturePipe,
  BaProfilePicturePipe,
  BcOrderBy,
  BcFormat,
];

const NGA_SERVICES = [
  BaImageLoaderService,
  BaThemePreloader,
  BaThemeSpinner,
  BaMenuService,
  BaAlertService,
  BcPagerService,
  BcUtilsService,
];

const NGA_VALIDATORS = [
  EmailValidator,
  EqualPasswordsValidator,
];

@NgModule({
  declarations: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppTranslationModule,
    NgUploaderModule,
  ],
  exports: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS,
  ],
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        BaThemeConfigProvider,
        BaThemeConfig,
        ...NGA_VALIDATORS,
        ...NGA_SERVICES,
      ],
    };
  }
}
