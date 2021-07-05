import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { getErrorsFromValidationError } from '../../../../../utils/error';

export const validationSchema = (t: TFunction) => {
  return Yup.object().shape({
    store_id: Yup.string().required(t('store_id_required')),
    company_name: Yup.string()
      .min(3, t('company_name_min'))
      .required(t('company_name_required')),
  });
};

export const validate = (t: TFunction, getValidationSchema: any) => {
  return (values: any) => {
    const schema = getValidationSchema(t);
    try {
      schema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
};
