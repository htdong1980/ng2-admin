export interface Balance {
  year: string;
  month: string;
  value: number;
}

export interface Account {
  _id: string;
  account: string;
  desc: string;
  status: string;
  balance?: Balance[];
}
