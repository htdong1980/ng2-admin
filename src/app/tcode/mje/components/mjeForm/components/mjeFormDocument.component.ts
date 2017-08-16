import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'mje-form-document',
  templateUrl: 'MjeFormDocument.html',
})
export class MjeFormDocument{
  @Input() formEdit: boolean = false;
  @Input() item: number;
  @Input('formGroup') public docItem: FormGroup;
  @Input() accList: any;
  @Input() objTypeList: any;
  @Input() refArray: Array<any>;

  @Output() itemEvent: EventEmitter<any> = new EventEmitter();

  addJnl() {
    // console.log('add');
    this.itemEvent.emit({ action: 'addJnl', docIndex: this.item });
  }

  removeJnl(j) {
    this.itemEvent.emit({ action: 'removeJnl', docIndex: this.item, jnlIndex: j});
  }

  handleObjEvent($event) {
    console.log($event);

    if ($event['action'] == 'addObj') {
        this.itemEvent.emit({ action: 'addObj', docIndex: this.item, jnlIndex: $event['jnlIndex'] });
    }

    if ($event['action'] == 'removeObj') {
        this.itemEvent.emit({ action: 'removeObj', docIndex: this.item, jnlIndex: $event['jnlIndex'], objIndex: $event['objIndex'] });
    }
  }

}
