export type BulkAction = 'enable' | 'disable' | 'delete';

export type DataFormikType = {
    store_id: string,
    code: string,
    name: string,
    category_id: string,
    supplier_id: string,
    location: string,
    allow_alt_description: boolean,
    serial_number: boolean,
    active: boolean,
    supply_price: string,
    unit_price: string,
    deductible_amount: string,
    deductible_amount_type: string,
    taxes: string,
    unit_type: string,
    description: string,
    ordering: string,
    number_turn: string,
    short_name: string
}

export type DataOptionType = {
    red_time: string;
    delay_time: string;
    finish_time: string;
    bg_color: string;
    font_color: string;
    yellow_time: string;
}

export enum BarCodeType {
    Lable,
    Sheet
}

export enum ShowComponentType {
    None,
    Edit,
    Barcodes,
    EditOption,
    Excel
}