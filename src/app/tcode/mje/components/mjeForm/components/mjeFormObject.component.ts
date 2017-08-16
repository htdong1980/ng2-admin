import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RefModal } from './refModal/refModal.component';

@Component({
  selector: 'mje-form-object',
  templateUrl: 'mjeFormObject.html',
})
export class MjeFormObject {
  @Input() formEdit: boolean;
  @Input() objIndex: number;
  @Input('group') public objItem: FormGroup;
  @Input() objTypeList: any;
  @Input() objArray: Array<any>;

  @Output() objEvent: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  removeObj() {
    console.log('Remove');
    this.objEvent.emit({ action: 'removeObj', objIndex: this.objIndex });
  }

  selectObj() {

    const activeModal = this.modalService.open(RefModal, { size: 'lg', backdrop: 'static', windowClass: 'dark-modal' });

    activeModal.componentInstance.modalHeader = 'Static modal';
    activeModal.componentInstance.modalContent = `This is static modal, backdrop click
                                                    will not close it. Click × or confirmation button to close modal.`;

    activeModal.componentInstance.data = 'hi';
    activeModal.componentInstance.objTypeList = this.objTypeList;
    activeModal.componentInstance.objType = this.objItem.controls['type'].value;
    activeModal.componentInstance.objTitle = this.objItem.controls['desc'].value;
    activeModal.componentInstance.objArray = this.objArray;

    activeModal.result.then((result) => {
      console.log(result);
      if (result.status) {
        this.objItem.controls['type'].setValue(result.objType);
        this.objItem.controls['id'].setValue(result.objTitle);
        this.objItem.controls['desc'].setValue(result.objTitle);
      }
    }, (reason) => {
      console.log(reason);
    });

  }

}
