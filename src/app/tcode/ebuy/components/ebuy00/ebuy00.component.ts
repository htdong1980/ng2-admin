// Internal
import { BcUtilsService } from '../../../../theme/services/bcUtils';

// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'ebuy-00',
  templateUrl: './ebuy00.html',
  styleUrls: ['./ebuy00.scss'],
})

export class Ebuy00 implements OnInit {

  prefix: string = 'Ebuy';
  rights: [string];
  items: MenuItem[];

  constructor(
    private router: Router,
    private utilsService: BcUtilsService,
  ) { }

  ngOnInit() {
    // Track user's visit
    this.utilsService.trackHistory();

    this.rights = this.utilsService.getMana();

    this.items = [
      {
        label: 'File',
        icon: 'fa-file-o',
        items: [
          {
            label: 'New',
            icon: 'fa-plus',
            items: [
              { label: 'Project', routerLink: ['/pages/tcode/mje'] },
              { label: 'Other', command: () => this.onCLick() },
            ],
          },
          { label: 'Open', command: (event) => console.log(event) },
          { separator: true },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          { label: 'Undo', icon: 'fa-mail-forward' },
          { label: 'Redo', icon: 'fa-mail-reply' },
        ],
      },
      {
        label: 'Help',
        icon: 'fa-question',
        items: [
          { label: 'Contents' },
          {
            label: 'Search',
            icon: 'fa-search',
            items: [
              {
                label: 'Text',
                items: [
                  { label: 'Workspace' },
                ],
              },
              { label: 'File' },
            ],
          },
        ],
      },
      {
        label: 'Actions',
        icon: 'fa-gear',
        items: [
          {
            label: 'Edit',
            icon: 'fa-refresh',
            items: [
              { label: 'Save', icon: 'fa-save' },
              { label: 'Update', icon: 'fa-save' },
            ],
          },
          {
            label: 'Other',
            icon: 'fa-phone',
            items: [
              { label: 'Delete', icon: 'fa-minus' },
            ],
          },
        ],
      },
      { label: 'Quit', icon: 'fa-minus' },
    ];

  }

  onCLick() {
      alert('Hellow');
  }

  private executeTCode(prefix: string, action: string): void {
    const url: string = this.utilsService.urlCombineTCode(prefix, action);
    this.router.navigate([url]);
  }

}
