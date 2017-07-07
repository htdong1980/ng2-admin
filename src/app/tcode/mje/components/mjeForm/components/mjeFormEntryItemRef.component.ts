import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RefModal } from './refModal/refModal.component';

@Component({
  selector: 'mje-form-entry-item-ref',
  templateUrl: 'mjeFormEntryItemRef.html',
})
export class MjeFormEntryItemRef {
  @Input() formEdit: boolean;
  @Input() ref: number;
  @Input('group') public mjeFormEntryItemRef: FormGroup;
  @Input() objTypeList: any;
  @Input() refArray: Array<any>;

  @Output() refEvent: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  removeRef() {
    // console.log('Remove');
    this.refEvent.emit({ action: 'removeRef', ref: this.ref });
  }

  selectRef() {

    const activeModal = this.modalService.open(RefModal, { size: 'lg', backdrop: 'static', windowClass: 'dark-modal' });

    activeModal.componentInstance.modalHeader = 'Static modal';
    activeModal.componentInstance.modalContent = `This is static modal, backdrop click
                                                    will not close it. Click × or confirmation button to close modal.`;

    activeModal.componentInstance.data = 'hi';
    activeModal.componentInstance.objTypeList = this.objTypeList;
    activeModal.componentInstance.objType = this.mjeFormEntryItemRef.controls['objType'].value;
    activeModal.componentInstance.objTitle = this.mjeFormEntryItemRef.controls['objTitle'].value;
    activeModal.componentInstance.refArray = this.refArray;

    activeModal.result.then((result) => {
      console.log(result);
      if (result.status) {
        this.mjeFormEntryItemRef.controls['objType'].setValue(result.objType);
        this.mjeFormEntryItemRef.controls['objId'].setValue(result.objTitle);
        this.mjeFormEntryItemRef.controls['objTitle'].setValue(result.objTitle);
      }
    }, (reason) => {
      console.log(reason);
    });

  }

}
