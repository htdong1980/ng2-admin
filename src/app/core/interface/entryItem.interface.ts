import { EntryItemRef } from './entryItemRef.interface';

export interface EntryItem {
  docDate: Date;
  desc: string;
  acc: string;
  crc: string;
  amt1: number;                  // original amount
  fx: number;                    // foreign exchange rate
  amt2: number;                  // translated amount
  refs?: EntryItemRef[];         // object reference
}
