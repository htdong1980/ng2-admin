import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cb-accounts',
  templateUrl: './cbAccounts.html',
  styleUrls: ['./cbAccounts.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CbAccounts),
      multi: true,
  }],
})

export class CbAccounts implements ControlValueAccessor {

  @Input('value') _value: string = '';
  @Input() list: Account[];

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
