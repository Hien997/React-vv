import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import EditView from '../../views/Edit';
import {
  giftcardActions,
  giftcardSelectors,
} from '../../../../../state/ducks/giftcard';
import { useMemoSelector } from 'src/hooks';
import { Giftcard } from '../../../../../state/models/giftcard';
import { validate, validationSchema } from './validate-schema';
import { GiftcardUpdateRequest } from '../../../../../state/api-models/giftcard';

export type GiftcardEditProps = {
  id?: string;
  onCancel: any;
  onSave: any;
};

const GiftcardEdit: React.FC<GiftcardEditProps> = ({ id, ...props }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('giftcard');

  const response = useMemoSelector(giftcardSelectors.getGiftcardDetails);

  const getGiftcardDetails = useCallback(
    (empId: string) => {
      dispatch(giftcardActions.getGiftcardDetails.request(empId));
    },
    [dispatch]
  );

  const createGiftcard = useCallback(
    (giftcard: Giftcard) => {
      dispatch(giftcardActions.createGiftcard.request(giftcard));
    },
    [dispatch]
  );

  const updateGiftcard = useCallback(
    (giftcard: GiftcardUpdateRequest) => {
      dispatch(giftcardActions.updateGiftcard.request(giftcard));
    },
    [dispatch]
  );

  useEffect(() => {
    if (id) {
      getGiftcardDetails(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSave = (giftcard: Giftcard) => {
    if (!id) {
      createGiftcard(giftcard);
    } else {
      const request: GiftcardUpdateRequest = {
        ...giftcard,
        id,
        giftcard_histories: {
          action: '1',
          user_id: giftcard.user_id,
          giftcard_id: giftcard.id,
          store_id: giftcard.store_id,
          value: giftcard.value,
          date: giftcard.effective_start,
        },
      };
      updateGiftcard(request);
    }
    props.onSave(giftcard);
  };

  const onCancel = () => {
    props.onCancel();
  };

  const edittingData = useMemo(() => {
    return response ? response.data : undefined;
  }, [response]);

  return (
    <EditView
      id={id}
      data={edittingData}
      onSave={onSave}
      onCancel={onCancel}
      validate={validate(validationSchema, t, id)}
    />
  );
};

export default React.memo(GiftcardEdit);
