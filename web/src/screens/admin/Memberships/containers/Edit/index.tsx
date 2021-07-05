import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import EditView from '../../views/Edit';
import { actions, selectors } from '../../../../../state/ducks/membership';
import { useMemoSelector } from 'src/hooks';
import {
  MemberShipCreateRequest,
  MembershipUpdateRequest,
  MembershiDetailRequest,
} from '../../../../../state/api-models/membership';
import { validationSchema } from './validate';

const getErrorsFromValidationError = (validationError: { inner: any[] }) => {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    };
  }, {});
};

export type MemberEditProps = {
  id?: string;
  onCancel: any;
  onSave: any;
  getMemberShipList: Function;
};

const MemberShipEdit: React.FC<MemberEditProps> = ({ id, ...props }) => {
  const { t } = useTranslation(['membership', 'message']);
  const dispatch = useDispatch();

  const [isSubmit, setIsSubmit] = useState(false);

  const createResponse = useMemoSelector(selectors.getCreate);
  const updateResponse = useMemoSelector(selectors.getUpdateMembership);

  const createMembership = useCallback(
    (membership: MemberShipCreateRequest) => {
      dispatch(actions.createMembership.request(membership));
    },
    [dispatch]
  );

  const updateMembership = useCallback(
    (membership: MembershipUpdateRequest) => {
      dispatch(actions.updateMembership.request(membership));
    },
    [dispatch]
  );

  const detailMembershipReq = useCallback(
    (membership: MembershiDetailRequest) => {
      dispatch(actions.detailMembership.request(membership));
    },
    [dispatch]
  );

  const alertMessage = (messageProps: string, isSuccess: boolean) => {
    const alertCus = (message: string) => {
      return <b style={{ fontSize: '15px' }}>{message}</b>;
    };

    isSuccess
      ? toast.success(alertCus(messageProps), {
          autoClose: 5000,
          position: 'bottom-right',
          hideProgressBar: true,
        })
      : toast.error(alertCus(messageProps), {
          autoClose: 5000,
          position: 'bottom-right',
          hideProgressBar: true,
        });
  };

  useEffect(() => {
    if (isSubmit) {
      if (createResponse?.success) {
        alertMessage(t('membership:unit_successful_adding'), true);
        props.onCancel();
        props.getMemberShipList();
      } else {
        alertMessage(t('membership:unit_error_adding'), false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createResponse]);

  useEffect(() => {
    if (id) {
      detailMembershipReq({ id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isSubmit) {
      if (updateResponse?.success) {
        alertMessage(t('membership:unit_successful_updating'), true);
        props.onCancel();
        props.getMemberShipList();
      } else {
        alertMessage(t('membership:unit_error_updating'), false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateResponse]);

  useEffect(() => {
    if (id) {
      detailMembershipReq({ id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSave = (data: MemberShipCreateRequest) => {
    const effectiveStart = `${data?.effective_start.replace('T', ' ')}:00`;
    const effectiveEnd = `${data?.effective_end.replace('T', ' ')}:00`;

    if (!id) {
      createMembership({
        ...data,
        effective_start: effectiveStart,
        effective_end: effectiveEnd,
      });
    } else {
      updateMembership({
        amount: data.amount,
        amount_type: data.amount_type,
        calculation_point: data.calculation_point,
        effective_end: effectiveEnd,
        effective_start: effectiveStart,
        id,
        m_code: data.m_code,
        published: data.published,
        store_id: data.store_id,
      });
    }
    setIsSubmit(true);
    // props.onSave(data);
  };

  const onCancel = () => {
    props.onCancel();
  };

  const validate = (getValidationSchema: any) => {
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

  return (
    <>
      <EditView
        id={id}
        onSave={onSave}
        onCancel={onCancel}
        validate={validate(validationSchema)}
      />
    </>
  );
};

export default React.memo(MemberShipEdit);
