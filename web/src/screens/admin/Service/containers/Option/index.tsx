import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions, selectors } from '../../../../../state/ducks/service';
import OptionView, { Props } from '../../views/EditOption';
import { ServiceUpdateRequest } from '../../../../../state/api-models/service';
import { Service } from '../../../../../state/models/service';
import { useMemoSelector } from 'src/hooks';

type DataProps = {
  onCancelOption: Function;
  data?: Service;
  getServiceList: Function;
};

const OptionContainer: React.FC<DataProps> = (props) => {
  const dispatch = useDispatch();

  const [isSubmit, setIsSubmit] = useState(false);

  const serviceUpdate = useMemoSelector(selectors.getServiceUpdate).response;

  const updateService = useCallback(
    (service: ServiceUpdateRequest) => {
      dispatch(actions.updateService.request(service));
    },
    [dispatch]
  );

  useEffect(() => {
    if (isSubmit) {
      if (serviceUpdate?.success) {
        alert('Updated');
        props.getServiceList();
      } else {
        alert('Failed');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceUpdate]);

  const update = (service: ServiceUpdateRequest) => {
    updateService(service);
    setIsSubmit(true);
  };

  const dataProps: Props = {
    ...props,
    updateService: update,
  };

  return <OptionView {...dataProps} />;
};
export default React.memo(OptionContainer);
