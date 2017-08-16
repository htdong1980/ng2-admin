import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'mje-form-journal',
  templateUrl: 'MjeFormJournal.html',
})
export class MjeFormJournal{
  @Input() formEdit: boolean = false;
  @Input() item: number;
  @Input('group') public jnlItem: FormGroup;
  @Input() accList: any;
  @Input() objTypeList: any;
  @Input() refArray: Array<any>;

  @Output() jnlEvent: EventEmitter<any> = new EventEmitter();

  addObj() {
    console.log('add');
    this.jnlEvent.emit({ action: 'addObj', jnlIndex: this.item });
  }

  handleRemoveObjEvent($event) {
    console.log($event);
    if ($event['action'] == 'removeObj') {
        this.jnlEvent.emit({ action: 'removeObj', jnlIndex: this.item, objIndex: $event['objIndex'] });
    }
  }

}
