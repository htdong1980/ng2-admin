import { AuthGuard, AuthTCodeGuard } from '../core/guard';

// Error
import { Err00 } from '../tcode/err/components/err00';      // Error Info
import { Err01 } from '../tcode/err/components/err01';      // Permission
import { Err02 } from '../tcode/err/components/err02';      // Not Found
import { Err03 } from '../tcode/err/components/err03';      // Other Errors

// My Categories
import { Mcat31 } from '../tcode/mcat/components/mcat31';   // Inbox
import { Mcat32 } from '../tcode/mcat/components/mcat32';   // Outbox
import { Mcat41 } from '../tcode/mcat/components/mcat41';   // Draft
import { Mcat42 } from '../tcode/mcat/components/mcat42';   // In progress
import { Mcat43 } from '../tcode/mcat/components/mcat43';   // Documenting
import { Mcat44 } from '../tcode/mcat/components/mcat44';   // Finished

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
        // canActivateChild: [AuthTCodeGuard],
        data: { name: 'TCode' },
        children: [

          // My Approval
          { path: 'inbox', component: Mcat31 },
          { path: 'outbox', component: Mcat32 },

          // My Requests
          { path: 'draft', component: Mcat41 },
          { path: 'inprogress', component: Mcat42 },
          { path: 'documenting', component: Mcat43 },
          { path: 'finished', component: Mcat44 },

          // By TCodes
          { path: 'asm', loadChildren: '../tcode/asm/asm.module#AsmModule' },
          { path: 'cbn', loadChildren: '../tcode/cbn/cbn.module#CbnModule' },
          { path: 'crm', loadChildren: '../tcode/crm/crm.module#CrmModule' },
          { path: 'ebuy', loadChildren: '../tcode/ebuy/ebuy.module#EbuyModule' },
          { path: 'erm', loadChildren: '../tcode/erm/erm.module#ErmModule' },
          { path: 'err', loadChildren: '../tcode/err/err.module#ErrModule' },
          { path: 'hcm', loadChildren: '../tcode/hcm/hcm.module#HcmModule' },
          { path: 'mcat', loadChildren: '../tcode/mcat/mcat.module#McatModule' },
          { path: 'mje', loadChildren: '../tcode/mje/mje.module#MjeModule' },
          { path: 'prime', loadChildren: '../tcode/prime/prime.module#PrimeModule' },
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

      // Error
      { path: 'err01', component: Err01, data: { name: 'Error Page' } },
      { path: 'err02', component: Err02, data: { name: 'Error Page' } },
      { path: 'err03', component: Err03, data: { name: 'Error Page' } },

      // Exceptional
      { path: '**', redirectTo: 'err02', pathMatch: 'full', data: { name: 'Error Page' } },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
