import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class GlobalState {

  private _data = new Subject<Object>();
  private _dataStream$ = this._data.asObservable();

  private _subscriptions: Map<string, Array<Function>> = new Map<string, Array<Function>>();

  constructor() {
    console.log('constructor')
    this._dataStream$.subscribe((data) => this._onEvent(data));
  }

  notifyDataChanged(event, value) {

    let current = this._data[event];

    // To track data changes
    console.log('Sending');
    console.log('Old value:');
    console.log(current);
    console.log('New value:');
    console.log(value);

    if (current !== value) {
      this._data[event] = value;

      this._data.next({
        event: event,
        data: this._data[event]
      });
    }
  }

  subscribe(event: string, callback: Function) {
    let subscribers = this._subscriptions.get(event) || [];
    subscribers.push(callback);

    console.log('Receiving');
    console.log(subscribers);

    this._subscriptions.set(event, subscribers);
  }

  _onEvent(data: any) {
    let subscribers = this._subscriptions.get(data['event']) || [];

    console.log('Receiving');
    console.log(subscribers);

    subscribers.forEach((callback) => {
      callback.call(null, data['data']);
      console.log('Callback');
      console.log(data['data']);
    });
  }
}
