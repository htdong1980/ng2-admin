import { BcUtilsService } from '../../../../theme/services/bcUtils';

import { AuthenticationService } from '../../../../core/services/authentication.service';

// For now, to get list of LGE - in the future no need as LGE must be selected in advance
import { LegalEntityService } from '../../../../core/services/legalEntity.service';
// import { LegalEntity } from '../../../../core/interface/legalEntity.interface';

// To get list of Account
import { AccountService } from '../../../../core/services/account.service';
// import { Account } from '../../../../core/interface/account.interface';

// Type Interfaces
// import { EntryItemRef } from '../../../../core/interface/entryItemRef.interface';
// import { EntryItem } from '../../../../core/interface/entryItem.interface';
// import { EntryJournal } from '../../../../core/interface/entryJournal.interface';

// System modules, components
import { Component, OnInit, OnChanges, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'mje-form',
  templateUrl: './mjeForm.html',
  styleUrls: ['./mjeForm.scss'],
})

export class MjeForm implements OnInit, OnChanges {

  // Input
  @Input() returnUrl: string = '';      // backward navigation
  @Input() tcode: string = '';          // action navigation
  @Input() entryJournal: any;  // data model

  // Temporary variables
  prefix: string = '';                  // get tcode prefix
  action: string = '';                  // get tcode action
  formEdit: boolean = false;            // form editable status
  private formAction = [];

  private currentUser: any;                    // get current user for JWT and API
  private userRights: Array<any>;
  public myForm: FormGroup;             // form model

  // Master Data and Dimension List - APIs
  public lgeList: Array<any>;        // list of legal entity
  public accList: Array<any>;        // Account[];  // list of account
  public objTypeList: Array<any> = [    // list of object type
    { obj: '', desc: '-' },
    { obj: 'vdr', desc: 'Vendor' },
    { obj: 'cem', desc: 'Cost Element' },
    { obj: 'cct', desc: 'Cost Center' },
    { obj: 'ito', desc: 'Internal Order' },
    { obj: 'wbs', desc: 'Work Breakdown Structure' },
  ];

  public vdrList: Array<any> = [
    { obj: '', desc: '-' },
    { obj: 'vdr1', desc: 'Vendor 1' },
    { obj: 'vdr2', desc: 'Vendor 2' },
    { obj: 'vdr3', desc: 'Vendor 3' },
    { obj: 'vdr4', desc: 'Vendor 4' },
    { obj: 'vdr5', desc: 'Vendor 5' },
  ];

  public cemList: Array<any> = [
    { obj: '', desc: '-' },
    { obj: 'cem1', desc: 'Cost Element 1' },
    { obj: 'cem2', desc: 'Cost Element 2' },
    { obj: 'cem3', desc: 'Cost Element 3' },
    { obj: 'cem4', desc: 'Cost Element 4' },
    { obj: 'cem5', desc: 'Cost Element 5' },
  ];

  public cctList: Array<any> = [
    { obj: '', desc: '-' },
    { obj: 'cct1', desc: 'Cost Center 1' },
    { obj: 'cct2', desc: 'Cost Center 2' },
    { obj: 'cct3', desc: 'Cost Center 3' },
    { obj: 'cct4', desc: 'Cost Center 4' },
    { obj: 'cct5', desc: 'Cost Center 5' },
  ];

  public itoList: Array<any> = [
    { obj: '', desc: '-' },
    { obj: 'ito1', desc: 'Internal Order 1' },
    { obj: 'ito2', desc: 'Internal Order 2' },
    { obj: 'ito3', desc: 'Internal Order 3' },
    { obj: 'ito4', desc: 'Internal Order 4' },
    { obj: 'ito5', desc: 'Internal Order 5' },
  ];

  public wbsList: Array<any> = [
    { obj: '', desc: '-' },
    { obj: 'wbs1', desc: 'WBS 1' },
    { obj: 'wbs2', desc: 'WBS 2' },
    { obj: 'wbs3', desc: 'WBS 3' },
    { obj: 'wbs4', desc: 'WBS 4' },
    { obj: 'wbs5', desc: 'WBS 5' },
  ];

  public refArray: Array<any> = [];

  constructor(
    private http: Http,
    private router: Router,
    // private mjeService: MjeService,
    private authenticationService: AuthenticationService,
    private lgeService: LegalEntityService,
    private accService: AccountService,
    private utilsService: BcUtilsService,
    private _fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    // Get currenct user and userRights here
    this.currentUser = this.authenticationService.getCurrentUser();
    this.userRights = this.currentUser.rights;
    console.log(this.currentUser);
    console.log(this.userRights);

    // parse tcode
    this.prefix = this.utilsService.extractPrefix(this.tcode);
    this.action = this.utilsService.extractAction(this.tcode);
    this.formEdit = (this.action == '01') || (this.action == '03');

    const rights: number = this.objectLength(this.userRights);

    for (let i = 0; i < rights; i++) {
        if (this.utilsService.extractPrefix(this.userRights[i]['tcode']) == this.prefix) {
          this.formAction[this.userRights[i]['tcode']] = true;
        }
     }

    // this.formEdit = false;
    console.log(rights);
    console.log(this.formAction);
    // Get list of master, dimension data via API
    this.loadAccList();
    // this.loadLgeList();
    this.lgeList = this.currentUser.lges;
    /*
    if (!this.lge) {
      this.lge = this.getWorkingLge();
    }
    */
    this.refArray['vdr'] = this.vdrList;
    this.refArray['cem'] = this.cemList;
    this.refArray['cct'] = this.cctList;
    this.refArray['ito'] = this.itoList;
    this.refArray['wbs'] = this.wbsList;

    // setup reactive form
    const countEntry: number = this.entryJournal.items.length;

    this.myForm = this._fb.group({
      _id: '',
      entryDate: [new Date(Date.now()), [Validators.required]],
      desc: ['', [Validators.required]],
      lge: ['', [Validators.required]],
      user: ['', [Validators.required]],
      items: this._fb.array([
        // this.initEntryItem(),    // Do not initiate blank entry
      ]),
    });

    for (let i = 0; i < countEntry; i++) {
      // to initiate the entry items and consequently entry item references in an entry journal
      this.addEntryItem(this.entryJournal.items[i].refs.length);
      // console.log('Entry ' + i + ' have ' + this.entryJournal.entryItems[i].entryItemRefs.length + 'references');
    }

    this.myForm.setValue(this.entryJournal);      // To collectively map data model with form model
    // this.myForm.patchValue(this.entryJournal); // Alternative
    /*
    this.myForm.patchValue({                      // Individual mapping
      entryDate: this.entryJournal.entryDate,
      desc: this.entryJournal.desc,
      lge: this.entryJournal.lge,
      user: this.entryJournal.userId,
      entries: [{
        docDate: this.entryJournal.docDate,
        desc: this.entryJournal.entries[0].desc,
        account: this.entryJournal.entries[0].account,
        currency: this.entryJournal.entries[0].currency,
        amount1: this.entryJournal.entries[0].amount1,
        fx: this.entryJournal.entries[0].fx,
        amount2: this.entryJournal.entries[0].amount2,
        refs: [{
          objtype: this.entryJournal.entries[0].refs[0].type,
          id: this.entryJournal.entries[0].refs[0].id,
          value: this.entryJournal.entries[0].refs[0].value,
        }],
      }],
    });
    */
  }

  getUserRights(): Array<any> {
    return JSON.parse(localStorage.getItem('userRights'));
  }

  private getWorkingLge(): string {
    return localStorage.getItem('workingLge');
  }

  private objectLength(obj) {
    let result = 0;
    for ( const prop in obj ) {
      if (obj.hasOwnProperty(prop)) {
        // or Object.prototype.hasOwnProperty.call(obj, prop)
        result++;
      }
    }
    return result;
  }

  // Load Legal Entity List
  private loadLgeList() {
    this.lgeService.getAll().subscribe(list => {
      this.lgeList = list;
      this.lgeList.unshift({ _id: '', lge: '', desc: '', status: '' });
    });
  }

  // Load Account List
  private loadAccList() {
    this.accService.getAll().subscribe(list => {
      this.accList = list;
      this.accList.unshift({ _id: '', account: '', desc: '', status: '' });
    });
  }

  ngOnChanges() {
  }

  initEntryItem() {
    return this._fb.group({
      docDate: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      acc: ['', [Validators.required]],
      crc: ['', [Validators.required]],
      amt1: [0, [Validators.required]],
      fx: [1, [Validators.required]],
      amt2: [0, [Validators.required]],
      refs: this._fb.array([
        // this.initEntryItemRef(),
      ]),
    });
  }

  initEntryItemRef() {
    return this._fb.group({
      objType: ['', [Validators.required]],
      objId: ['', [Validators.required]],
      objTitle: ['', [Validators.required]],
    });
  }

  saveEntryJournal(model: any) {
    // call API to save transaction
    console.log(model);
  }

  addEntryItem(entryRefElements: number = 0) {
    const control = <FormArray> this.myForm.controls['items'];

    // Add new entry item
    control.push(this.initEntryItem());

    // Add refs in entry
    const control1 = <FormGroup> control.controls[control.length - 1];
    const control2 = <FormArray> control1.controls['refs'];
    for (let i = 0; i < entryRefElements; i++) {
      control2.push(this.initEntryItemRef());
    }
  }

  removeEntryItem(i: number) {
    const control = <FormArray> this.myForm.controls['items'];
    control.removeAt(i);
  }

  // Handle output event from mjeFormEntryItem
  handleItemEvent($event) {
     console.log($event);

    if ($event['action'] == 'addRef') {
      const i: number = + $event['item'];
      const control = <FormArray> this.myForm.controls['items'];
      const control1 = <FormGroup> control.controls[i];
      const control2 = <FormArray> control1.controls['refs'];
      // console.log(control);
      // console.log(control1);
      // console.log(control2);
      // const control = <FormArray> this.myForm.controls['entries'][i].controls['refs'];
      control2.push(this.initEntryItemRef());
      // console.log('hello');
    }

    if ($event['action'] == 'removeRef') {
      const i: number = + $event['item'];
      const control = <FormArray> this.myForm.controls['items'];
      const control1 = <FormGroup> control.controls[i];
      const j: number = + $event['ref'];
      const control2 = <FormArray> control1.controls['refs'];
      control2.removeAt(j);
    }
  }

  return() {
    this.router.navigate([this.returnUrl]);
  }

  /* -------------------------- BEGIN TEST DATA ------------------------------*/
  /*
  export interface Test {
    name: string; // text
    age?: number; // number
    gender?: string; // radio
    role?: string; // select (primitive)
    theme?: Theme; // select (object)
    topics?: string[]; // multiple select
    isActive?: boolean; // checkbox
    toggle?: string; // checkbox toggle either 'toggled' or 'untoggled'
  }

  export interface Theme {
    display: string;
    backgroundColor: string;
    fontColor: string;
  }
  /* ----------------------- END OF TEST DATA ------------------------------ */

  /* -------------------------- BEGIN TEST DATA ------------------------------*/
  /*
  public test: Test;

  // standing data goes here
  public genders = [
    { value: 'M', display: 'Male' },
    { value: 'F', display: 'Female' },
  ];

  public roles = [
    { value: 'admin', display: 'Administrator' },
    { value: 'guest', display: 'Guest' },
    { value: 'custom', display: 'Custom' },
  ];

  public themes: Theme[] = [
    { display: 'Dark', backgroundColor: 'black', fontColor: 'white' },
    { display: 'Light', backgroundColor: 'white', fontColor: 'black' },
    { display: 'Sleek', backgroundColor: 'grey', fontColor: 'white' },
  ];

  public topics = [
    { value: 'game', display: 'Gaming' },
    { value: 'tech', display: 'Technology' },
    { value: 'life', display: 'Lifestyle' },
  ];

  public toggles = [
    { value: 'toggled', display: 'Toggled' },
    { value: 'untoggled', display: 'UnToggled' },
  ];
  // end standing data
  /* ----------------------- END OF TEST DATA ------------------------------ */

  /* -------------------------- BEGIN TEST DATA ---------------------------*/
  /*
  this.test = {
    name: '',
    gender: this.genders[0].value, // default to Male
    role: null,
    theme: this.themes[0], // default to dark theme
    isActive: false,
    toggle: this.toggles[1].value, // default to untoggled
    topics: [this.topics[1].value], // default to Technology
  };
  /* ----------------------- END OF TEST DATA --------------------------- */

  /* -------------------------- BEGIN TEST DATA ---------------------------*/
  /*
  public save(isValid: boolean, f: Test) {
    console.log(f);
  }
  */
  /*
  public checkboxModel = [{
    name: 'Check 1',
    checked: false,
    class: 'col-md-4',
  }, {
    name: 'Check 2',
    checked: true,
    class: 'col-md-4',
  }, {
    name: 'Check 3',
    checked: false,
    class: 'col-md-4',
  }];

  isDisabled: boolean = false;

  public checkboxPropertiesMapping = {
    model: 'checked',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class',
  };

  public checkboxModel1 = [{
    name: 'Checkbox with success',
    state: false,
    class: 'has-success checkbox',
  }, {
    name: 'Checkbox with warning',
    state: false,
    class: 'has-warning checkbox',
  }, {
    name: 'Checkbox with error',
    state: false,
    class: 'has-error checkbox',
  }];

  public checkboxPropertiesMapping1 = {
    model: 'state',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class',
  };
  /* ----------------------- END OF TEST DATA --------------------------- */


}
