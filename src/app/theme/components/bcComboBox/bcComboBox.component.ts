import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bc-combo-box',
  templateUrl: './bcComboBox.html',
  styleUrls: ['./bcComboBox.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BcComboBox),
      multi: true,
  }],
})

export class BcComboBox implements ControlValueAccessor {
  @Input() title: string = '';
  @Input('value') _value: string = '';
  @Input() list: Array<any>;
  @Input() f1: string;
  @Input() f2: string;

  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this._value = value;
    }
  }

  onSelect(deviceValue) {
    this.value = deviceValue;
    // console.log(deviceValue);
  }
}
