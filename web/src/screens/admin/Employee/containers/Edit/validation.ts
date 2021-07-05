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
    password: Yup.string()
      .min(
        8,
        t('message:min_length', { fieldName: 'Password', mixLength: '8' })
      )
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
        'Password must contain: numbers, uppercase and lowercase letters\n'
      )
      .required(t('message:required', { fieldName: 'Password' })),
    stores: Yup.string().required(
      t('message:required', { fieldName: 'Stores' })
    ),
    role_id: Yup.string().required(
      t('message:required', { fieldName: 'Group' })
    ),
    employee: Yup.object().shape({
      employee_code: Yup.string()
        .required(t('message:required', { fieldName: 'Employee Code' }))
        .max(
          32,
          t('message:max_length', {
            fieldName: 'Employee Code',
            maxLength: '32',
          })
        ),
      employee_ssn: Yup.string().max(
        32,
        t('message:max_length', { fieldName: 'Employee SSN', maxLength: '32' })
      ),
      contract_accepted: Yup.object().shape({
        type: Yup.string().required(
          t('message:required', { fieldName: 'Employee Accepted' })
        ),
        percent_rate: Yup.string().when('type', {
          is: 'percent_rate',
          then: Yup.string().required(
            t('message:required', { fieldName: 'Percent rate' })
          ),
        }),
        hour_rate: Yup.string().when('type', {
          is: 'hour_rate',
          then: Yup.string().required(
            t('message:required', { fieldName: 'Hour rate' })
          ),
        }),
      }),

      safety_box: Yup.string().max(
        4,
        t('message:max_length', { fieldName: 'Safety box', maxLength: '4' })
      ),
      finish_time: Yup.number().integer(
        t('message:number', { fieldName: 'Finish time' })
      ),
      red_time: Yup.number().integer(
        t('message:number', { fieldName: 'Red time' })
      ),
      yellow_time: Yup.number().integer(
        t('message:number', { fieldName: 'Yellow time' })
      ),
      deplay_time: Yup.number().integer(
        t('message:number', { fieldName: 'Deplay_time time' })
      ),

      address: Yup.string().max(
        150,
        t('message:max_length', { fieldName: 'Address', maxLength: '150' })
      ),
      city: Yup.string().max(
        50,
        t('message:max_length', { fieldName: 'City', maxLength: '50' })
      ),
      state: Yup.string().max(
        4,
        t('message:max_length', { fieldName: 'State', maxLength: '4' })
      ),
      zipcode: Yup.string().max(
        10,
        t('message:max_length', { fieldName: 'Zip', maxLength: '10' })
      ),
    }),
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
