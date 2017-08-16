import { EntryItem } from './entryItem.interface';

export interface EntryJournal {
  _id: string;
  entryDate: string; // Date;
  desc: string;
  lge: string;
  user: string;
  items?: EntryItem[];
}
