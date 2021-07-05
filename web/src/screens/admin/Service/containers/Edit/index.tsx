import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import EditView from '../../views/Edit';
import { actions, selectors } from '../../../../../state/ducks/service';
import { useMemoSelector } from 'src/hooks';
import {
  ServiceCreateRequest,
  ServiceUpdateRequest,
} from '../../../../../state/api-models/service';
import { validationSchema } from './validate';
import { validate } from './util';

export type SeviceEditProps = {
  id?: string;
  onCancel: any;
  getServiceList: Function;
};

const ServiceEdit: React.FC<SeviceEditProps> = ({ id, ...props }) => {
  const dispatch = useDispatch();
  const response = useMemoSelector(selectors.getServicceDetails);
  const serviceCreate = useMemoSelector(selectors.getServiceCreate).response;
  const serviceUpdate = useMemoSelector(selectors.getServiceUpdate).response;

  const [isSubmit, setIsSubmit] = useState(false);

  const getServiceDetails = useCallback(
    (empId: string) => {
      dispatch(actions.getServiceDetails.request(empId));
    },
    [dispatch]
  );

  const createService = useCallback(
    (service: ServiceCreateRequest) => {
      dispatch(actions.createService.request(service));
    },
    [dispatch]
  );

  const updateService = useCallback(
    (service: ServiceUpdateRequest) => {
      dispatch(actions.updateService.request(service));
    },
    [dispatch]
  );

  useEffect(() => {
    if (id) {
      getServiceDetails(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isSubmit) {
      if (serviceCreate?.success) {
        alert('Created');
        props.onCancel();
        props.getServiceList();
      } else {
        alert('Failed');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceCreate]);

  useEffect(() => {
    if (isSubmit) {
      if (serviceUpdate?.success) {
        alert('Updated');
        props.onCancel();
        props.getServiceList();
      } else {
        alert('Failed');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceUpdate]);

  const onSave = (service: ServiceCreateRequest) => {
    if (!id) {
      createService(service);
    } else {
      service.id = id;
      updateService(service);
    }
    setIsSubmit(true);
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
        validate={validate(validationSchema)}
        id={id}
      />
    </>
  );
};

export default React.memo(ServiceEdit);
