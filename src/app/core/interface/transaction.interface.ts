/* Transaction captures financial records that includes
 * - Header and
 * - List of accounting entries
 */
import { Entry } from './entry.interface';

export interface Transaction {
  _id: string;
  lge: string;
  entryDate: Date;
  desc: string;
  userId: string;
  entries?: Entry[];
}
