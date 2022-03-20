export interface SpendDb{
    rows: Array<Spend>
    totals: Record<string, number>
}

export class Spend {

    constructor(
        public _id?: string,
        public name: string = '',
        public value: number = 0,
        public timeStemp?: number,
        public description?: string,
        public methodsPayment?: string
        ) {
    }

    setId?() {
        // Implement your own set Id
        this._id = 'hkjgbjhb '
    }
}

