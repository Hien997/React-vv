import * as Yup from 'yup';
import { TFunction } from 'i18next';

export const validationSchema = (t: TFunction) => {
  return Yup.object().shape({
    m_code: Yup.string()
      .required(t('message:required', { fieldName: 'Membership Code' })),
    amount: Yup.string()
      .required(t('message:required', { fieldName: 'Membership amount' })),
    amount_type: Yup.string()
      .required(t('message:required', { fieldName: 'Membership amount type' })),
    effective_start: Yup.string()
      .required(t('message:required', { fieldName: 'Membership date start' })),
    effective_end: Yup.string()
      .required(t('message:required', { fieldName: 'Membership date end' })),
  });
}; 