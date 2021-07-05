import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import HistoryView from '../../views/History';
import {
  giftcardActions,
  giftcardSelectors,
} from '../../../../../state/ducks/giftcard';
import { useMemoSelector } from 'src/hooks';

export type GiftcardHistoryProps = {
  id?: string;
  onCancel: any;
};

const GiftcardHistory: React.FC<GiftcardHistoryProps> = ({ id, ...props }) => {
  const dispatch = useDispatch();

  const response = useMemoSelector(giftcardSelectors.getGiftcardDetails);

  const getGiftcardDetails = useCallback(
    (empId: string) => {
      dispatch(giftcardActions.getGiftcardDetails.request(empId));
    },
    [dispatch]
  );

  useEffect(() => {
    if (id) {
      getGiftcardDetails(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gifcardData = useMemo(() => {
    return response ? response.data : undefined;
  }, [response]);

  const onCancel = () => {
    props.onCancel();
  };

  return <HistoryView id={id} data={gifcardData} onCancel={onCancel} />;
};

export default React.memo(GiftcardHistory);
