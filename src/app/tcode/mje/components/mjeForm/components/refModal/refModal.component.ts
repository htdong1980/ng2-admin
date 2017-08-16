import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'ref-modal',
  styleUrls: [('./refModal.scss')],
  templateUrl: './refModal.html',
})

export class RefModal implements OnInit {

  modalHeader: string;
  modalContent: string = `Model Content`;

  objTypeList: any;
  objType: string;              // Value of dropdown 'ObjType'
  objId: string;
  objTitle: string;             // Title of selected object
  objArray: Array<any>;         // Reference Array
  selected: CompleterItem;

  private results$ = new Subject();
  // private resultsFetched: boolean;
  protected dataService: CompleterData;

  constructor(
    private activeModal: NgbActiveModal,
    private completerService: CompleterService) {

      // this.resultsFetched = false;
      // initialize with observable
      this.dataService = this.completerService.local(this.results$, 'desc', 'desc');
  }

  ngOnInit() {
    console.log(this.objType);
    console.log(this.objTitle);
    console.log(this.objArray);
  }

  onSelect(objType) {
    this.objType = objType;
    console.log(objType);

    console.log(this.objArray[objType]);
    this.results$.next(this.objArray[objType]);
    // this.resultsFetched = true;

  }

  onBlur() {
    console.log('On Blur');
  }

  objKeyUp($event) {
    console.log('On Key Up');
    console.log($event);
  }

  selectedItem(selected: CompleterItem) {
    console.log(selected);
    this.selected = selected;
  }

  closeModal() {
    this.activeModal.close({ status: false });
  }

  confirmModal() {
    this.activeModal.close({ status: true, objType: this.objType, objTitle: this.objTitle });
  }

}
