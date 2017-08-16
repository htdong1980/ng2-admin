import { AppTranslationModule } from '../app.translation.module';

import { AuthenticationService } from '../core/services/authentication.service';
import { AuthGuard } from '../core/guard';                                        // Login Guard
import { AuthTCodeGuard } from '../core/guard';                                   // TCode Guard
import { UserService } from '../core/services/user.service';

// Import all TCode Modules
import { TCodeModule } from '../tcode/tcode.module';
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
    routing,
  ],
  declarations: [
    Pages,
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    AuthTCodeGuard,
    UserService,
  ],
})
export class PagesModule {
}
