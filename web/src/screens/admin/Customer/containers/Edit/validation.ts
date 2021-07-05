import * as Yup from 'yup';
import { getErrorsFromValidationError } from '../../../../../utils/error';

export const validationSchema = (values: any, t: Function) => {
  return Yup.object().shape({
    full_name: Yup.string()
      .min(4, t('message:min_length', { fieldName: 'Name', minLength: '4' }))
      .max(
        100,
        t('message:max_length', { fieldName: 'Name', maxLength: '100' })
      )
      .required(t('message:required', { fieldName: 'Name' })),
    email: Yup.string()
      .email(t('message:email', { fieldName: 'Email' }))
      .required(t('message:required', { fieldName: 'Email' })),
    cellphone: Yup.string()
      .required(t('message:required', { fieldName: 'CellPhone' })),
    
  });
};

export const validate = (getValidationSchema: any, t: Function) => {
  return (values: any) => {
    const schema = getValidationSchema(values, t);
    try {
      schema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
};

