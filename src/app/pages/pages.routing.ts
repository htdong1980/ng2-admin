import { Page404, Page500 } from './_error';
import { AuthGuard, AuthTCodeGuard } from '../core/guard';

import { Inbox, Outbox, Draft, InProgress, Documenting, Finished } from '../tcode';

import { Mje } from '../tcode';
// import { Mje00 } from '../tcode/mje/components/mje00';

// import { Vdr, Vdr01 } from '../tcode';

import { Pages } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/pages/landingpage/landingpage.module#LandingPageModule',
    data: { name: 'Landing' },
  },
  {
    path: 'login',
    loadChildren: 'app/pages/_login/login.module#LoginModule',
    data: { name: 'Login' },
  },
  {
    path: 'reset',
    loadChildren: 'app/pages/_reset/reset.module#ResetModule',
    data: { name: 'Reset' },
  },
  {
    path: 'register',
    loadChildren: 'app/pages/_register/register.module#RegisterModule',
    data: { name: 'Register' },
  },
  {
    path: 'pages',
    component: Pages,
    canActivateChild: [AuthGuard],
    data: { name: 'Pages' },
    children: [
      { path: '', redirectTo: 'library/blank', data: { name: 'Page Default' }, pathMatch: 'full' },
      { path: 'library/blank', loadChildren: './blank/blank.module#BlankModule' },
      { path: 'library/adminLTE', loadChildren: './adminLTE/adminLTE.module#AdminLTEModule' },

      // tcode
      { path: 'tcode',
        canActivateChild: [AuthTCodeGuard],
        data: { name: 'TCode' },
        children: [
          // My Approval
          { path: 'inbox', component: Inbox },
          { path: 'outbox', component: Outbox },

          // My Requests
          { path: 'draft', component: Draft },
          { path: 'inprogress', component: InProgress },
          { path: 'documenting', component: Documenting },
          { path: 'finished', component: Finished },

          { path: 'mje', loadChildren: '../tcode/mje/mje.module#MjeModule' },
          // { path: 'vdr', loadChildren: '../tcode/vdr/vdr.module#VdrModule' },
          /*
          { path: 'mje/mje00', loadChildren: '../tcode/mje/components/mje00/mje00.module#Mje00Module' },
          { path: 'mje/mje01', loadChildren: '../tcode/mje/components/mje01/mje01.module#Mje01Module' },
          { path: 'mje/mje02', loadChildren: '../tcode/mje/components/mje02/mje02.module#Mje02Module' },
          { path: 'mje/mje03', loadChildren: '../tcode/mje/components/mje03/mje03.module#Mje03Module' },
          */
          // { path: 'mje00', component: Mje00 },

          // Vendor
          // { path: 'vdr', component: Vdr },
          // { path: 'vdr01', component: Vdr01 },
          // { path: 'vdr', loadChildren: '../tcode/vdr/vdr.module#VdrModule' },

          /*
          { path: 'news10', component: News10 },
          { path: 'news01', loadChildren: '../tcode/news/components/news01/news01.module#News01Module' },
          */
        ],
      },

      // error
      { path: 'page404', component: Page404, data: { name: 'Page404' } },
      { path: 'page500', component: Page500, data: { name: 'Page500' } },

      // Exceptional
      { path: '**', redirectTo: 'page404', pathMatch: 'full', data: { name: 'Page500' } },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
