import { EntryItem } from './entryItem.interface';

export interface EntryJournal {
  _id: string;
  entryDate: Date;
  desc: string;
  lge: string;
  user: string;
  items?: EntryItem[];
}
