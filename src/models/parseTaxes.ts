export interface Taxes{
    tax_type: string;
    amount: number;
}

export class ParseTaxes{
    id_galicia_payment: number;
    source: string;
    cuit: string;
    id_host: string;
    commision: {
        amount: any;
        taxes: Array<Taxes>
    }
    transaction:{
        total_amount: any;
        net_amount?: number;
        taxes: Array<Taxes>
    }
}
