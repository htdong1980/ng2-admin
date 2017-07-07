export class Dimension {
    type: string;
    value: string;
}

export class Entry {
    type: string;
    account: string;
    dimensions: Dimension[];
}

export class Mje {
    _id: string;
    lge: string;
    docDate: string;
    desc: string;
    entryDate: string;
    user: string;
    entries: Entry[];
}
