import { Address } from './address.interface';
import { Contact } from './contact.interface';

export interface Individual {
  pid: string;
  firstname: string;
  lastname: string;
  alias?: string;
  dob?: string;
  address?: Address[];
  contact?: Contact[];
}
