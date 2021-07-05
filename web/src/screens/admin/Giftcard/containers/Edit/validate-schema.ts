
import * as Yup from 'yup';
import { TFunction } from 'i18next';


export const validationSchema = (values: any, t: TFunction, id?: string) => {
  if (id) {
    return Yup.object().shape({
      store_id: Yup.string()
        .required('Store Info is a required field'),
      giftcard_number: Yup.string()
        .required(t('giftcard:giftcards_number_required'))
        .max(32, 'Giftcard number must have not over 32 characters'),
      value: Yup.string()
        .min(1, 'Original Amount  has to be at least 1 character')
        .required(t('giftcard:giftcards_value_required')),
      value_use: Yup.string()
        .required('Giftcard Balance is a required field'),
      user_id: Yup.string()
        .required('Customer Name is a required field'),
      effective_start: Yup.string()
        .required('Begin Date is a required field'),
      effective_end: Yup.string()
        .required('Expiration Date is a required field'),
      published: Yup.string()
        .required('Expiration Date is a required field'),
    });
  }
  return Yup.object().shape({
    store_id: Yup.string()
      .required('Store Info is a required field'),
    user_id: Yup.string()
      .required('Customer Name is a required field'),
    giftcard_number: Yup.string()
      .max(32, 'Giftcard number must have not over 32 characters')
      .required(t('giftcard:giftcards_number_required')),
    value: Yup.string()
      .min(1, 'Original Amount  has to be at least 1 character')
      .required(t('giftcard:giftcards_value_required')),
    effective_start: Yup.string()
      .required('Begin date is a required field'),
    effective_end: Yup.string()
      .required('Expiration date is a required field'),
    published: Yup.string()
      .required('Expiration Date is a required field'),
  });
};

export const validate = (
  getValidationSchema: any,
  t: TFunction,
  id?: string
) => {
  return (values: any) => {
    const schema = getValidationSchema(values, t, id);
    try {
      schema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
};

export const getErrorsFromValidationError = (
  validationError: { inner: any[] }
) => {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    };
  }, {});
};