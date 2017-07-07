import { Address } from './address.interface';
import { Contact } from './contact.interface';

export interface Organisation {
  name: string;
  address: Address[];
  contact: Contact[];
}
