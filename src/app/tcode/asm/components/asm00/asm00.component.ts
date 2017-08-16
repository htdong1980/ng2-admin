// Internal
import { BcUtilsService } from '../../../../theme/services/bcUtils';

// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'asm-00',
  templateUrl: './asm00.html',
  styleUrls: ['./asm00.scss'],
})

export class Asm00 implements OnInit {

  /*****************************************************************************
   * TCODE TEMPORARY VARIABLES
   * prefix:        Prefix of tcode
   * collapse:      UI for processing and datatable action
   * rights:        User system rights
   *****************************************************************************/

  prefix: string = 'asm';
  systemImagePath: string = '../../../../assets/images/system/asm/';

  // currentUrl: string = '';
  collapse: boolean = true;
  rights: Array<any>;

  items: MenuItem[];

  constructor(
    private router: Router,
    private utilsService: BcUtilsService,
  ) { }

  ngOnInit() {

    // Track user's visit
    this.utilsService.trackHistory();

    const currentUser: any = this.utilsService.getCurrentUser();
    this.rights = currentUser.rights;

    this.items = [
      {
        label: 'File',
        icon: 'fa-file-o',
        items: [
          {
            label: 'New Audit File',
            routerLink: ['/pages/tcode/mje'],
          },
          {
            label: 'New Group',
            routerLink: ['/pages/tcode/mje']
          },
          {
            label: 'Open Audit File',
            command: (event) => console.log(event)
          },
          {
            label: 'Change Cabinet',
            command: (event) => console.log(event)
          },
          { separator: true },
          {
            label: 'Backup Audit File',
            command: (event) => console.log(event)
          },
          {
            label: 'Restore Audit File',
            command: (event) => console.log(event)
          },
          { separator: true },
          {
            label: 'End Engagement',
            command: (event) => console.log(event)
          },
          {
            label: 'Carryforward',
            command: (event) => console.log(event)
          },
          { separator: true },
          {
            label: 'Rename',
            command: (event) => console.log(event)
          },
          {
            label: 'Properties',
            command: (event) => console.log(event)
          },
          { separator: true },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          { label: 'Copy to Another Audit File' },
          { label: 'Copy from Another Audit File' },
          { separator: true },
          { label: 'Delete' },
        ],
      },
      {
        label: 'View',
        icon: 'fa-gear',
        items: [
          { label: 'Out Tray Contents' },
          { label: 'In Tray Contents' },
          { separator: true },
          { label: 'Filter' },
          { separator: true },
          { label: 'Document Attributes' },
          { separator: true },
          { label: 'Sort' },
        ],
      },
      {
        label: 'Tools',
        icon: 'fa-gear',
        items: [
          { label: 'Transfer To Out Tray' },
          { label: 'Transfer From In Tray' },
          { separator: true },
          { label: 'Sign Off as Preparer' },
          { label: 'Sign Off as Reviewer' },
          { label: 'Edit Sign Off' },
          { label: 'Create Sign Off Report' },
          { separator: true },
          { label: 'Attention Flag' },
          { label: 'Open Document List' },
          { separator: true },
          { label: 'Pack Manager' },
          { label: 'Infobase Manager' },
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
    ];

  }

  onCLick() {
      alert('Hellow');
  }

  /* To get tcode and navigate the link */
  private onClick(prefix: string, action: string): void {
    const url: string = this.utilsService.urlCombineTCode(prefix, action);
    this.router.navigate([url]);
  }

}
