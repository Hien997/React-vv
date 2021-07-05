import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMemoSelector } from 'src/hooks';
import { storeSelectors, storeActions } from 'src/state/ducks/store';
import { FormGroupSelectInputItem } from './FormGroup';

type SelectStoreInputItemProps = {
  name: string;
  label: string;
};

function SelectStoreInputItem({ name, label }: SelectStoreInputItemProps) {
  const dispatch = useDispatch();
  const response = useMemoSelector(storeSelectors.getSupplierList);

  const getStoreList = useCallback(() => {
    dispatch(storeActions.getStoreList.request({}));
  }, [dispatch]);

  useEffect(() => {
    getStoreList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options =
    response?.data.list.map((store) => ({
      value: store.id,
      label: store.store_name,
    })) || [];
  return (
    <FormGroupSelectInputItem
      label={label}
      name={name}
      options={[{ value: '', label: 'Select', hidden: true }, ...options]}
    />
  );
}

export { SelectStoreInputItem };
