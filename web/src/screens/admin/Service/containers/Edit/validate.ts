import * as Yup from 'yup';

export const validationSchema = (values: any) => {
    return Yup.object().shape({
        name: Yup.string()
            .required('Item name is required'),
        category_id: Yup.string()
            .required('Category is required'),
        supplier_id: Yup.string()
            .required('Supplier is required!'),
        supply_price: Yup.string()
            .required('Supply Cost is required')
            .test('len', 'Supply Cost type must contain: numbers\n', value => { return /^[0-9]+$/.test(value) }),
        unit_price: Yup.string()
            .required('Unit Price is required')
            .test('len', 'Unit Price type must contain: numbers\n', value => { return !value || /^[0-9]+$/.test(value) }),
        deductible_amount: Yup.string()
            .test('len', 'Deductible Employee  type must contain: numbers\n', value => { return !value || /^[0-9]+$/.test(value) })
        ,
        deductible_amount_type: Yup.string()
            .test('len', 'Amount type must contain: numbers\n', value => { return !value || /^[0-9]+$/.test(value) })
        ,
        ordering: Yup.string()
            .test('len', 'Ordering must contain: numbers\n', value => { return !value || /^[0-9]+$/.test(value) })
        ,
        unit_type: Yup.string()
            .test('len', 'Unit type must contain: numbers\n', value => { return !value || /^[0-9]+$/.test(value) })
    });
};