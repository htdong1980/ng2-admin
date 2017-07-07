import { AppConfig } from './app.config';
// import { AuthenticationService, UserService } from './core/services';
import { InternalStateType, AppState } from './app.service';
import { GlobalState } from './global.state';
import { routing } from './app.routing';
import { App } from './app.component';
import { NgaModule } from './theme/nga.module';

// import { NgcModule } from './components/ngc.module';
import { PagesModule } from './pages/pages.module';

import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

// import { AuthGuard } from './_guards/index';
// import { AuthenticationService, UserService } from './_services/index';

// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState,
  AppConfig,
//  AuthGuard,
//  AuthenticationService,
//  UserService,
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void,
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    // NgcModule.forRoot(),
    PagesModule,
    routing,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,
  ],
})

export class AppModule {

  constructor(public appState: AppState) {
  }
}
