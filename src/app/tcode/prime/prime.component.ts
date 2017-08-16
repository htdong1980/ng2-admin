import { Component, OnInit } from '@angular/core';

import { MenubarModule, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'prime',
  templateUrl: './prime.html',
  styleUrls: ['./prime.scss'],
})

export class Prime implements OnInit {

  items: MenuItem[];

  constructor() {
  }

  ngOnInit() {

    this.items = [
      {
        label: 'Input',
        items: [
          {
            label: 'Input Group',
            routerLink: ['/pages/tcode/prime/prime01/inputgroup'],
          },
          {
            label: 'Calendar',
            routerLink: ['/pages/tcode/prime/prime01/pcalendar'],
          },
          {
            label: 'Chips',
            routerLink: ['/pages/tcode/prime/prime01/pchips'],
          },
          {
            label: 'Dropdown',
            routerLink: ['/pages/tcode/prime/prime01/pdropdown'],
          },
          {
            label: 'Input Switch',
            routerLink: ['/pages/tcode/prime/prime01/inputSwitch'],
          },
          {
            label: 'Input Text Area',
            routerLink: ['/pages/tcode/prime/prime01/inputTextArea'],
          },
          {
            label: 'Mask',
            routerLink: ['/pages/tcode/prime/prime01/mask'],
          },
          {
            label: 'Password',
            routerLink: ['/pages/tcode/prime/prime01/password'],
          },
          {
            label: 'Rating',
            routerLink: ['/pages/tcode/prime/prime01/rating'],
          },
          {
            label: 'Spinner',
            routerLink: ['/pages/tcode/prime/prime01/spinner'],
          },
          {
            label: 'Toggle Button',
            routerLink: ['/pages/tcode/prime/prime01/toggleButton'],
          },
          {
            label: 'Auto Complete',
            routerLink: ['/pages/tcode/prime/prime01/autoComplete'],
          },
          {
            label: 'Check Box',
            routerLink: ['/pages/tcode/prime/prime01/checkBox'],
          },
          {
            label: 'Color Picker',
            routerLink: ['/pages/tcode/prime/prime01/colorPicker'],
          },
          {
            label: 'Editor',
            routerLink: ['/pages/tcode/prime/prime01/editor'],
          },
          {
            label: 'Input Text',
            routerLink: ['/pages/tcode/prime/prime01/inputText'],
          },
          {
            label: 'List Box',
            routerLink: ['/pages/tcode/prime/prime01/listBox'],
          },
          {
            label: 'Multi Select',
            routerLink: ['/pages/tcode/prime/prime01/multiSelect'],
          },
          {
            label: 'Radio Button',
            routerLink: ['/pages/tcode/prime/prime01/radioButton'],
          },
          {
            label: 'Slider',
            routerLink: ['/pages/tcode/prime/prime01/slider'],
          },
          {
            label: 'Select Button',
            routerLink: ['/pages/tcode/prime/prime01/selectButton'],
          },
          {
            label: 'Tri Checkbox',
            routerLink: ['/pages/tcode/prime/prime01/triCheckbox'],
          },
        ],
      },
      {
        label: 'Button',
        items: [
          {
            label: 'Button',
            routerLink: ['/pages/tcode/prime/prime02/button'],
          },
          {
            label: 'Split Button',
            routerLink: ['/pages/tcode/prime/prime02/splitButton'],
          },
        ],
      },
      {
        label: 'Data',
        items: [
          {
            label: 'Carousel',
            routerLink: ['/pages/tcode/prime/prime03/carousel'],
          },
          {
            label: 'Data List',
            routerLink: ['/pages/tcode/prime/prime03/dataList'],
          },
          {
            label: 'Data Table',
            routerLink: ['/pages/tcode/prime/prime03/dataTable'],
          },
          {
            label: 'Order List',
            routerLink: ['/pages/tcode/prime/prime03/orderList'],
          },
          {
            label: 'Paginator',
            routerLink: ['/pages/tcode/prime/prime03/paginator'],
          },
          {
            label: 'Data List',
            routerLink: ['/pages/tcode/prime/prime03/dataList'],
          },
          {
            label: 'Schedule',
            routerLink: ['/pages/tcode/prime/prime03/schedule'],
          },
          {
            label: 'Tree Table',
            routerLink: ['/pages/tcode/prime/prime03/treeTable'],
          },
          {
            label: 'Data Grid',
            routerLink: ['/pages/tcode/prime/prime03/dataGrid'],
          },
          {
            label: 'Data Scroller',
            routerLink: ['/pages/tcode/prime/prime03/dataScroller'],
          },
          {
            label: 'Org Chart',
            routerLink: ['/pages/tcode/prime/prime03/orgChart'],
          },
          {
            label: 'GMap',
            routerLink: ['/pages/tcode/prime/prime03/gmap'],
          },
          {
            label: 'Tree',
            routerLink: ['/pages/tcode/prime/prime03/tree'],
          },
        ],
      },
      {
        label: 'Panel',
        items: [
          {
            label: 'Accordion',
            routerLink: ['/pages/tcode/prime/prime04/accordion'],
          },
          {
            label: 'Panel',
            routerLink: ['/pages/tcode/prime/prime04/panel'],
          },
          {
            label: 'Tab View',
            routerLink: ['/pages/tcode/prime/prime04/tabView'],
          },
          {
            label: 'Field Set',
            routerLink: ['/pages/tcode/prime/prime04/fieldSet'],
          },
          {
            label: 'Grid',
            routerLink: ['/pages/tcode/prime/prime04/grid'],
          },
          {
            label: 'Toolbar',
            routerLink: ['/pages/tcode/prime/prime04/toolbar'],
          },
        ],
      },
      {
        label: 'Overlay',
        items: [
          {
            label: 'Confirm Dialog',
            routerLink: ['/pages/tcode/prime/prime05/confirmDialog'],
          },
          {
            label: 'Light Box',
            routerLink: ['/pages/tcode/prime/prime05/lightBox'],
          },
          {
            label: 'Tool Tip',
            routerLink: ['/pages/tcode/prime/prime05/tooltip'],
          },
          {
            label: 'Dialog',
            routerLink: ['/pages/tcode/prime/prime05/dialog'],
          },
          {
            label: 'Overlay Panel',
            routerLink: ['/pages/tcode/prime/prime05/overlayPanel'],
          },
        ],
      },
      {
        label: 'File',
        items: [
          {
            label: 'Upload',
            routerLink: ['/pages/tcode/prime/prime06/file'],
          },
        ],
      },
      {
        label: 'Menu',
        items: [
          {
            label: 'Menu Model',
            routerLink: ['/pages/tcode/prime/prime07/menu'],
          },
          {
            label: 'Context Model',
            routerLink: ['/pages/tcode/prime/prime07/contextModel'],
          },
          {
            label: 'Menu',
            routerLink: ['/pages/tcode/prime/prime07/menu'],
          },
          {
            label: 'Panel Menu',
            routerLink: ['/pages/tcode/prime/prime07/panelMenu'],
          },
          {
            label: 'Steps',
            routerLink: ['/pages/tcode/prime/prime07/steps'],
          },
          {
            label: 'Tiered Menu',
            routerLink: ['/pages/tcode/prime/prime07/tieredMenu'],
          },
          {
            label: 'Breadcum',
            routerLink: ['/pages/tcode/prime/prime07/breadcum'],
          },
          {
            label: 'Mega Menu',
            routerLink: ['/pages/tcode/prime/prime07/megaMenu'],
          },
          {
            label: 'Menu Bar',
            routerLink: ['/pages/tcode/prime/prime07/menuBar'],
          },
          {
            label: 'Slide Menu',
            routerLink: ['/pages/tcode/prime/prime07/slideMenu'],
          },
          {
            label: 'Tab Menu',
            routerLink: ['/pages/tcode/prime/prime07/tabMenu'],
          },
        ],
      },
      {
        label: 'Chart',
        items: [
          {
            label: 'Chart Model',
            routerLink: ['/pages/tcode/prime/prime08/chartModel'],
          },
          {
            label: 'Doughnut',
            routerLink: ['/pages/tcode/prime/prime08/doughnut'],
          },
          {
            label: 'Polar Area',
            routerLink: ['/pages/tcode/prime/prime08/polarArea'],
          },
          {
            label: 'Radar',
            routerLink: ['/pages/tcode/prime/prime08/radar'],
          },
          {
            label: 'Bar',
            routerLink: ['/pages/tcode/prime/prime08/bar'],
          },
          {
            label: 'Line',
            routerLink: ['/pages/tcode/prime/prime08/line'],
          },
          {
            label: 'Pie',
            routerLink: ['/pages/tcode/prime/prime08/pie'],
          },
        ],
      },
      {
        label: 'Messages',
        items: [
          {
            label: 'Messages',
            routerLink: ['/pages/tcode/prime/prime09/messages'],
          },
          {
            label: 'Growl',
            routerLink: ['/pages/tcode/prime/prime09/growl'],
          },
        ],
      },
      {
        label: 'Multimedia',
        items: [
          {
            label: 'Galarie',
            routerLink: ['/pages/tcode/prime/prime10/galarie'],
          },
        ],
      },
      {
        label: 'Drag & Drop',
        items: [
          {
            label: 'Drag & Drop',
            routerLink: ['/pages/tcode/prime/prime11/dragDrop'],
          },
        ],
      },
      {
        label: 'Misc',
        items: [
          {
            label: 'Responsive',
            routerLink: ['/pages/tcode/prime/prime12/responsive'],
          },
          {
            label: 'Defer',
            routerLink: ['/pages/tcode/prime/prime12/defaer'],
          },
          {
            label: 'Captcha',
            routerLink: ['/pages/tcode/prime/prime12/captcha'],
          },
          {
            label: 'Validation',
            routerLink: ['/pages/tcode/prime/prime12/validation'],
          },
          {
            label: 'Code Highlighter',
            routerLink: ['/pages/tcode/prime/prime12/codeHighlighter'],
          },
          {
            label: 'RTL',
            routerLink: ['/pages/tcode/prime/prime12/rtl'],
          },
          {
            label: 'Block UI',
            routerLink: ['/pages/tcode/prime/prime12/blockUI'],
          },
          {
            label: 'Inplace',
            routerLink: ['/pages/tcode/prime/prime12/inplace'],
          },
          {
            label: 'Progress Bar',
            routerLink: ['/pages/tcode/prime/prime12/progressBar'],
          },
          {
            label: 'Terminal',
            routerLink: ['/pages/tcode/prime/prime12/terminal'],
          },
        ],
      },
    ];


  }

}
