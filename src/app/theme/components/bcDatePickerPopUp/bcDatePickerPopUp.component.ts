import { Component, Input, forwardRef, Provider } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as moment from 'moment';

const DATEPICKER_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BcDatePickerPopUp),
  multi: true,
};

@Component({
  selector: 'bc-date-picker-popup [formControlName]',
  templateUrl: 'bcDatePickerPopUp.html',
  providers: [DATEPICKER_VALUE_ACCESSOR],
})
export class BcDatePickerPopUp implements ControlValueAccessor {
  @Input() formEdit: boolean;

  // the method set in registerOnChange, it is just
  // a placeholder for a method that takes one parameter,
  // we use it to emit changes back to the form
  private propagateChange = (_: any) => { };

  // store the value of reactive form
  _customDatePickerValue;

  get customDatePickerValue() {
    return this._customDatePickerValue;
  }

  set customDatePickerValue(value) {
    this._customDatePickerValue = value;
    this.propagateChange(value);
  }

  // store the Model value of the component
  _datePickerValue;

  get datePickerValue() {
    return this._datePickerValue;
  }

  set datePickerValue(value) {
    // console.log(value);
    this._datePickerValue = value;

    // update reactive form control value
    const jsDate = new Date(value['year'], value['month'] - 1, value['day'] + 1);
    this.customDatePickerValue = jsDate;

  }

  // Write a new value to the element
  // This is the initial value set to the component
  public writeValue(obj: any): void {
    // console.log(this.formEdit);
    if (obj) {
      const dateStruct = {
        'day': obj.getDate(),
        'month': obj.getMonth() + 1,
        'year': obj.getFullYear(),
      };
      //console.log(dateStruct);
      this._datePickerValue = dateStruct;
    }
  }

  // Set the function to be called when control receives a change event
  // Registers 'fn' that will be fired when changes are made
  // this is how we emit the changes back to the form
  public registerOnChange(fn: any):void {
    this.propagateChange = fn;
  }

  // Set the function to be called when control receives a touch event
  // not used, used for touch input
  registerOnTouched(fn: any): void { }

}
