// Model
import { LegalEntityService } from '../../../../core/services/legalEntity.service';
import { AccountService } from '../../../../core/services/account.service';
import { MjeService } from '../../../../core/services/mje.service';

// Internal
import { BcUtilsService } from '../../../../theme/services/bcUtils';

// External
import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'mje-form',
  templateUrl: './mjeForm.html',
  styleUrls: ['./mjeForm.scss'],
})

export class MjeForm implements OnInit, OnChanges {

  /*****************************************************************************
   * FORM INPUT
   * returnUrl:     Url supports backward navigation
   * tcode:         Tcode that is using this Form, to customize form accordingly
   * entryJournal:  Model data
   *****************************************************************************/
  // @Input() returnUrl: string = '';
  @Input() tcode: string = '';
  @Input() entryJournal: any;

  /*****************************************************************************
   * FORM TEMPORARY VARIABLES
   * prefix:        Prefix of tcode
   * action:        Action of tcode
   * formEdit:      Form editable status: True or false
   * formAction:    Array of status that guides in-form embedded Tcode set up
   *
   * currentUser:   Get Current user for Form, JWT and API
   * userRights:    User system rights
   * myForm:        Form Data
   *****************************************************************************/
  canReturn: boolean = false;
  prefix: string = '';
  action: string = '';
  formEdit: boolean = false;
  formAction = [];
  collapse: boolean = true;

  isSubmit: boolean = false;
  submitIcon: string = '';
  submitTitle: string = '';
  submitMessage: string = '';

  currentUser: any;
  userRights: Array<any>;
  myForm: FormGroup;

  /*****************************************************************************
   * FORM REFERENCE DATA = MASTER DATA + DIMENSION DATA + MOCK UP DATA
   * lgeList:       List of Legal Entities (User or default all)
   * accList:       List of accounts
   *
   * objTypeList:   List of Object type
   * vdrList:       List of Vendor
   * cemList:       List of Cost Element
   * cctList:       List of Cost Center
   * itoList:       List of Intrnal Order
   * wbsList:       List of Work Breakdown Structure
   * refArray:      Reference Array which store Type Head data
   *****************************************************************************/
  lgeList: Array<any>;
  accList: Array<any>;

  objTypeList: Array<any> = [
    { obj: '', desc: '-' },
    { obj: 'vdr', desc: 'Vendor' },
    { obj: 'cem', desc: 'Cost Element' },
    { obj: 'cct', desc: 'Cost Center' },
    { obj: 'ito', desc: 'Internal Order' },
    { obj: 'wbs', desc: 'Work Breakdown Structure' },
  ];

  vdrList: Array<any> = [
    { obj: '', desc: '-' },
    { obj: 'vdr1', desc: 'Vendor 1' },
    { obj: 'vdr2', desc: 'Vendor 2' },
    { obj: 'vdr3', desc: 'Vendor 3' },
    { obj: 'vdr4', desc: 'Vendor 4' },
    { obj: 'vdr5', desc: 'Vendor 5' },
  ];

  cemList: Array<any> = [
    { obj: '', desc: '-' },
    { obj: 'cem1', desc: 'Cost Element 1' },
    { obj: 'cem2', desc: 'Cost Element 2' },
    { obj: 'cem3', desc: 'Cost Element 3' },
    { obj: 'cem4', desc: 'Cost Element 4' },
    { obj: 'cem5', desc: 'Cost Element 5' },
  ];

  cctList: Array<any> = [
    { obj: '', desc: '-' },
    { obj: 'cct1', desc: 'Cost Center 1' },
    { obj: 'cct2', desc: 'Cost Center 2' },
    { obj: 'cct3', desc: 'Cost Center 3' },
    { obj: 'cct4', desc: 'Cost Center 4' },
    { obj: 'cct5', desc: 'Cost Center 5' },
  ];

  itoList: Array<any> = [
    { obj: '', desc: '-' },
    { obj: 'ito1', desc: 'Internal Order 1' },
    { obj: 'ito2', desc: 'Internal Order 2' },
    { obj: 'ito3', desc: 'Internal Order 3' },
    { obj: 'ito4', desc: 'Internal Order 4' },
    { obj: 'ito5', desc: 'Internal Order 5' },
  ];

  wbsList: Array<any> = [
    { obj: '', desc: '-' },
    { obj: 'wbs1', desc: 'WBS 1' },
    { obj: 'wbs2', desc: 'WBS 2' },
    { obj: 'wbs3', desc: 'WBS 3' },
    { obj: 'wbs4', desc: 'WBS 4' },
    { obj: 'wbs5', desc: 'WBS 5' },
  ];

  refArray: Array<any> = [];

  constructor(
    private http: Http,
    private router: Router,
    private mjeService: MjeService,
    private lgeService: LegalEntityService,
    private accService: AccountService,
    private utilsService: BcUtilsService,
    private _fb: FormBuilder,
  ) {
  }

  /*****************************************************************************
   *  INITIALIZATION 1
   *  - ngOnInit
   *  - initUserAndRights:    Get current user and user's rights
   *  - initTCodeParsing:     Parse TCode for navigation
   *  - initRightsFilter:     Filter relevant user's rights for this form
   *  - initReferenceData:    Get reference data (Master Data and Dimension Data)
   *    + loadLgeList:          Load Legal Entities List from server
   *    + loadAccList:          Load Accounts List from server
   *****************************************************************************/

  ngOnInit() {
    this.canReturn = this.utilsService.canReturn();
    this.Initialization();
  }

  private Initialization() {
    this.initUserAndRights();
    this.initTCodeParsing();
    this.initRightsFilter();
    this.initReferenceData();
  }

  private initUserAndRights() {
    this.currentUser = this.utilsService.getCurrentUser();
    this.userRights = this.currentUser.rights;
  }

  private initTCodeParsing() {
    this.prefix = this.utilsService.extractPrefix(this.tcode);
    this.action = this.utilsService.extractAction(this.tcode);
    this.formEdit = this.utilsService.formEditable(this.tcode);
    // console.log(this.formEdit);
  }

  private initRightsFilter() {
    // If no rights shall be error
    const rights: number = this.userRights.length;
    // Alternative where Array of object is without index
    // If no rights shall be zero
    // const rights: number = this.utilsService.getLengthArrayOfObject(this.userRights);
    for (let i = 0; i < rights; i++) {
        if (this.utilsService.extractPrefix(this.userRights[i]['tcode']) == this.prefix) {
          this.formAction[this.userRights[i]['tcode']] = true;
        }
     }
  }

  private initReferenceData() {
    // Only offer assigned Legal Entity, ERROR does not conform structure of combobox
    // this.lgeList = this.currentUser.lges;
    this.loadLgeList();                  // All Legal Entity
    this.loadAccList();
    this.refArray['vdr'] = this.vdrList;
    this.refArray['cem'] = this.cemList;
    this.refArray['cct'] = this.cctList;
    this.refArray['ito'] = this.itoList;
    this.refArray['wbs'] = this.wbsList;
  }

  private loadLgeList() {
    this.lgeService.getAll().subscribe(list => {
      this.lgeList = list;
      this.lgeList.unshift({ _id: '', lge: '', desc: '', status: '' });
    });
  }

  private loadAccList() {
    this.accService.getAll().subscribe(list => {
      this.accList = list;
      this.accList.unshift({ _id: '', account: '', desc: '', status: '' });
    });
  }

  /*****************************************************************************
   *  INITIALIZATION 2
   *  - ngOnChanges           To detect any change of Model Data (async)
   *    + Create:               Only blank header
   *    + View / Edit           Complete Header with or without Items / Refs
   *
   *  - initReactiveFormAndMapModelData:
   *    + initHeader:               Initialize Form header with model header data
   *    + initEntryItem:            Initialize Form detail: Entry Item
   *    + initEntryItemWithData:    Initialize and map Model data for Entry Item
   *    + initEntryItemRef:         Initialize Form detail: Entry Item Ref
   *    + initEntryItemRefWithData: Initialize and map Model data for Entry Item Ref
   *****************************************************************************/

  ngOnChanges(changes: SimpleChanges) {
    if (changes['entryJournal'] && (this.entryJournal != undefined)) {
      this.initReactiveFormAndMapModelData();
    }
  }

  private initReactiveFormAndMapModelData() {
    this.initHeader();

    // DOC LEVEL
    const hasDoc: boolean = this.utilsService.propInObject(this.entryJournal, 'docs');
    if (hasDoc) {
      const countDoc: number = this.entryJournal.docs.length;
      console.log(countDoc);

      for (let i = 0; i < countDoc; i++) {
        let controlDoc = <FormArray> this.myForm.controls['docs'];
        controlDoc.push(this.initEntryDocWithData(this.entryJournal.docs[i]));

        //JOURNAL LEVEL
        let hasJnl: boolean = this.utilsService.propInObject(this.entryJournal.docs[i], 'jnls');
        if (hasJnl) {
          const countJnl: number = this.entryJournal.docs[i].jnls.length;
          console.log(countJnl);
          console.log(this.entryJournal.docs[i]);

          for (let j = 0; j < countJnl; j++) {
            //TO DO: performance improve needed
            let controlDoc1 = <FormGroup> controlDoc.controls[controlDoc.length - 1];
            let controlJnl = <FormArray> controlDoc1.controls['jnls'];

            controlJnl.push(this.initEntryJnlWithData(this.entryJournal.docs[i].jnls[j]));

            // OBJ LEVEL
            let hasObj: boolean = this.utilsService.propInObject(this.entryJournal.docs[i].jnls[j], 'objs');
            if (hasObj) {
              const countObj: number = this.entryJournal.docs[i].jnls[j].objs.length;
              console.log(countObj);
              console.log(this.entryJournal.docs[i].jnls[j]);

              for (let k = 0; k < countObj; k++) {
                // TO DO: performance improve needed
                let controlJnl1 = <FormGroup> controlJnl.controls[controlJnl.length - 1];
                let controlObj = <FormArray> controlJnl1.controls['objs'];

                controlObj.push(this.initEntryObjWithData(this.entryJournal.docs[i].jnls[j].objs[k]));
                console.log(this.entryJournal.docs[i].jnls[j].objs[k]);
              }
            } // hasObj
          }
        } // hasJnl
      }
    } // hasDoc


  }

  initHeader() {
    this.myForm = this._fb.group({
      _id: [this.entryJournal._id],
      ref: [this.entryJournal.ref],
      date: [new Date(this.entryJournal.date), [Validators.required]],
      ppr: [this.entryJournal.ppr, [Validators.required]],
      lge: [this.entryJournal.lge, [Validators.required]],
      desc: [this.entryJournal.desc, [Validators.required]],
      docs: this._fb.array([
        // this.initEntryItem(),            // Do not initiate blank entry
      ]),
      status: [this.entryJournal.status],
      post: [this.entryJournal.post],
    });
  }

  initEntryDoc() {
    return this._fb.group({
      ref: ['', [Validators.required]],
      date: [new Date(Date.now()), [Validators.required]],
      desc: ['', [Validators.required]],
      jnls: this._fb.array([
        // this.initEntryItemRef(),
      ]),
    });
  }

  initEntryDocWithData(docItem: any) {
    return this._fb.group({
      ref: [docItem.ref, [Validators.required]],
      date: [new Date(docItem.date), [Validators.required]],
      desc: [docItem.desc, [Validators.required]],
      jnls: this._fb.array([
        // this.initEntryItemRef(),
      ]),
    });
  }

  initEntryJnl() {
    return this._fb.group({
      acc: ['', [Validators.required]],
      crc: ['', [Validators.required]],
      amt1: [0, [Validators.required]],
      fx: [1, [Validators.required]],
      amt2: [0, [Validators.required]],
      objs: this._fb.array([
        // this.initEntryItemRef(),
      ]),
    });
  }

  initEntryJnlWithData(jnlItem: any) {
    return this._fb.group({
      acc: [jnlItem.acc, [Validators.required]],
      crc: [jnlItem.crc, [Validators.required]],
      amt1: [jnlItem.amt1, [Validators.required]],
      fx: [jnlItem.fx, [Validators.required]],
      amt2: [jnlItem.amt2, [Validators.required]],
      objs: this._fb.array([
        // this.initEntryItemRef(),
      ]),
    });
  }

  initEntryObj() {
    return this._fb.group({
      type: ['', [Validators.required]],
      id: ['', [Validators.required]],
      desc: ['', [Validators.required]],
    });
  }

  initEntryObjWithData(objItem: any) {
    return this._fb.group({
      type: [objItem.type, [Validators.required]],
      id: [objItem.id, [Validators.required]],
      desc: [objItem.desc, [Validators.required]],
    });
  }

  /*****************************************************************************
   *  FORM OPERATION
   *  - ngOnChanges
   *  - addEntryItem:     To add an Entry Item with a number of Refs into myForm
   *  - removeEntryItem:  To remove an Entry Item at position i from entryJournal
   *  - handleItemEvent:  To handle output events emitted from mjeFormEntryItem for
   *    + addRef            Add a ref in Entry Item
   *    + removeRef         Remove a ref in Entry Item
   * - submitForm:        To sumbit action without refreshing the page
   *    + saveEntryJournal
   *    + updateEntryJournal
   *    + enableEntryJournal
   *    + disableEntryJournal
   * - return:            Return to previous page
   *****************************************************************************/

  addDoc() {
    const control = <FormArray> this.myForm.controls['docs'];
    control.push(this.initEntryDoc());   // Add new doc item at the end
  }

  removeDoc(i: number) {
    const control = <FormArray> this.myForm.controls['docs'];
    control.removeAt(i);
  }

  handleEvent($event) {
    console.log($event);
    const i: number = + $event['docIndex'];
    const j: number = + $event['jnlIndex'];
    const k: number = + $event['objIndex'];
    console.log(i, j, k);

    const docFA = <FormArray> this.myForm.controls['docs'];
    const docFG = <FormGroup> docFA.controls[i];
    const jnlFA = <FormArray> docFG.controls['jnls'];

    let jnlFG;
    let objFA;

    if (j >= 0) {
      jnlFG = <FormGroup> jnlFA.controls[j];
      objFA = <FormArray> jnlFG.controls['objs'];
    }

    console.log(jnlFA);

    switch ($event['action']) {
      case 'addJnl':
        jnlFA.push(this.initEntryJnl());
        break;

      case 'removeJnl':
        if (j >= 0) {
          jnlFA.removeAt(j);
        }
        break;

      case 'addObj':
        objFA.push(this.initEntryObj());
        break;

      case 'removeObj':
        if (k >= 0) {
          objFA.removeAt(k);
        }
        break;
      default:
    }
  }

  toggleCollapse() {
    // this.collapse = !this.collapse;
    // this.utilsService.setCollapsePref(this.collapse);
  }

  submitForm() {
    if (this.myForm.valid) {
      const mje: any = this.myForm['_value'];
      // console.log(mje);
      this.saveEntryJournal(mje);
    }
  }

  saveEntryJournal(mje: any) {
    if (this.action == '11') {
      this.mjeService.create(mje)
        .subscribe(
          data => {
              // this.alertService.success('Registration successful', true);
              // this.router.navigate(['/login']);
              this.submitIcon = 'ion-checkmark-circled';
              this.submitTitle = 'action_status.success';
              this.submitMessage = 'action_message.create';
              this.isSubmit = true;

          },
          error => {
              // this.alertService.error(error._body);
              // this.loading = false;
              console.log(error.body);
          },
      );
    }

    if (this.action == '13') {
      // update
      // console.log(mje);
      this.mjeService.update(mje)
        .subscribe(
          data => {
              console.log(data);
              this.submitIcon = 'ion-checkmark-circled';
              this.submitTitle = 'action_status.success';
              this.isSubmit = true;

          },
          error => {
              // this.alertService.error(error._body);
              // this.loading = false;
              console.log(error.body);
          },
      );
    }

  }

  executeAction(action: string, value: string): void {
    let url: string = '';
    if (action == '11') {
      url = this.utilsService.urlLead(this.prefix + action);
    } else {
      url = this.utilsService.urlForm(this.prefix + action, value);
    }
    this.router.navigate([url]);
    // console.log(url);
  }

  return() {
    this.utilsService.returnPrevious();
    // this.router.navigate([this.returnUrl]);
  }

}
