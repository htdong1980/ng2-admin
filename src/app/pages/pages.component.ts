import { PAGES_MENU } from './pages.menu';
import { BaMenuService } from '../theme';

import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'pages',
  templateUrl: 'pages.html',
})
export class Pages implements OnInit {

  constructor(
    private _menuService: BaMenuService,
  ) { }

  ngOnInit() {
    // This is place to customize PAGES_MENU by logged in user
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
