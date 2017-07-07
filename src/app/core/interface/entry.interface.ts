import { EntryRef } from './entryRef.interface';

/* Entry includes:
 * - accountring entry line item
 * - reference to one object at different modules [SD, WM, MM, PP...] thus supporting sub ledgers and transactions by object
 * - references to objects in FI-CO module for budgeting, controlling and reporting purposes (Cost Center, WBS, Cost Element)
 */

export interface Entry {
  docDate: Date;
  desc: string;
  account: string;
  amount: number;
  entryRefs?: EntryRef[];
}
