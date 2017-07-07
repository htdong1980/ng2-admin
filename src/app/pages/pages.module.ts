import { Page404, Page500 } from './_error';
import { UserService } from '../core/services/user.service';
import { AuthenticationService } from '../core/services/authentication.service';
import { AuthGuard } from '../core/guard';                                        // Login Guard
import { AuthTCodeGuard } from '../core/guard';                                   // TCode Guard

// Import all TCode Modules
import { TCodeModule } from '../tcode';
// import { MjeModule } from '../tcode/mje/mje.module';
// import { VdrModule } from '../tcode/module.module';

import { AppTranslationModule } from '../app.translation.module';
import { Pages } from './pages.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../theme/nga.module';
import { routing } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    TCodeModule,
    // VdrModule,
    // MjeModule,
    routing,
  ],
  declarations: [
    Pages,
    Page404,
    Page500,
  ],
  providers: [
    AuthGuard,
    AuthTCodeGuard,
    AuthenticationService,
    UserService,
  ],
})
export class PagesModule {
}
