import { BcUtilsService } from '../../services/bcUtils';

import { Component } from '@angular/core';
import { GlobalState } from '../../../global.state';
import { Router } from '@angular/router';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss'],
})
export class BaPageTop {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;
  public tcodeExecution: string = '';

  constructor(
    private _state: GlobalState,
    private router: Router,
    private utilsService: BcUtilsService,
  ) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public keyDownFunction(event) {
    if (event.keyCode == 13) {
      const url: string = this.utilsService.urlLead(this.tcodeExecution);
      this.tcodeExecution = '';
      this.router.navigate([url]);
    }
  }

  public logOut() {
    this.utilsService.logOut();    
  }
}
