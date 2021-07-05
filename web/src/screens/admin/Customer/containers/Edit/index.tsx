import React, { useCallback, useEffect, useMemo } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useMemoSelector } from 'src/hooks';
import EditView from '../../views/Edit';
import {
  customerActions,
  customerSelectors,
} from '../../../../../state/ducks/customer';
import { actions as membershipActions } from '../../../../../state/ducks/membership';
import { validate, validationSchema } from './validation';
import { useTranslation } from 'react-i18next';


export type CustomerEditProps = {
  id?: string;
  onCancel: any;
  onSave: any;
};

const CustomerEdit: React.FC<CustomerEditProps> = ({ id, ...props }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['message', 'customer']);
  const response = useMemoSelector(customerSelectors.getCustomerDetails);

  const getCustomerDetails = useCallback(
    (request: any) => {
      dispatch(customerActions.getCustomerDetails.request(request));
    },
    [dispatch]
  );

  const createCustomer = useCallback(
    (customer: FormData) => {
      dispatch(customerActions.createCustomer.request(customer));
    },
    [dispatch]
  );

  const updateCustomer = useCallback(
    (customer: FormData) => {
      dispatch(customerActions.updateCustomer.request(customer));
    },
    [dispatch]
  );

  const getMemberShip = useCallback(
    (membershipNumber: string) => {
      dispatch(
        membershipActions.detailMembership.request({ id: membershipNumber })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (id) {
      const request = {
        id,
      };
      getCustomerDetails(request);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSave = (customer: FormData) => {
    if (!id) {
      createCustomer(customer);
    } else {
      customer.append('id', id);
      updateCustomer(customer);
    }
    props.onSave(customer);
  };

  const onCancel = () => {
    props.onCancel();
  };

  const edittingData = useMemo(() => {
    return response ? response.data : undefined;
  }, [response]);

  return (
    <>
      <EditView
        data={edittingData}
        onSave={onSave}
        onCancel={onCancel}
        validate={validate(validationSchema, t)}
      />
    </>
  );
};

export default CustomerEdit;
