import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'mje-form-entry-item',
  templateUrl: 'MjeFormEntryItem.html',
})
export class MjeFormEntryItem{
  @Input() formEdit: boolean = false;
  @Input() item: number;
  @Input('formGroup') public entryItem: FormGroup;
  @Input() accList: any;
  @Input() objTypeList: any;
  @Input() refArray: Array<any>;

  @Output() itemEvent: EventEmitter<any> = new EventEmitter();

  addRef() {
    // console.log('add');
    this.itemEvent.emit({ action: 'addRef', item: this.item });
  }

  handleRefEvent($event) {
    // console.log($event);
    if ($event['action'] == 'removeRef') {
        this.itemEvent.emit({ action: 'removeRef', item: this.item, ref: $event['ref'] });
    }
  }

}
