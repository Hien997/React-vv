const makeCode = () => {
    var result = '';
    const length = 10;
    var characters = 'ABCDEFGHJKLMNOPQRSTUVWXUZ0123456789';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return result.substring(0, 3) + '-' + result.substring(3);
}

export const defaultValues = {
    store_id: '',
    code: makeCode(),
    name: '',
    category_id: '',
    supplier_id: '',
    location: '',
    allow_alt_description: true,
    active: true,
    supply_price: '',
    unit_price: '',
    deductible_amount: '',
    deductible_amount_type: '',
    taxes: '',
    unit_type: '',
    description: '',
    ordering: '',
    number_turn: '',
    short_name: ''
};

