import { getDate } from '../../../../../utils/date-time';

export const CalculationPoint = [
  { value: true, label: 'Enable' },
  { value: false, label: 'Disable' },
];

export const AmountType = [
  { value: '1', label: '$ Amount' },
  { value: '2', label: 'Percent' },
];

export const defaultValues = {
  store_id: '',
  m_code: '',
  amount: '',
  amount_type: '1',
  published: 0,
  calculation_point: true,
  effective_start: getDate(false),
  effective_end: getDate(true),
};
