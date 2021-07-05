import React, { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
  supplierActions,
  supplierSelectors,
} from '../../../../../state/ducks/supplier';
import { Supplier } from '../../../../../state/models/supplier';
import { useMemoSelector } from 'src/hooks';
import EditView from '../../views/Edit';
import { validationSchema, validate } from './validation';

export type SupplierEditProps = {
  id?: number;
  onCancel: any;
  onSave: any;
};

const SupplierEdit: React.FC<SupplierEditProps> = ({ id, ...props }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation('supplier');

  const response = useMemoSelector(supplierSelectors.getSupplierDetails);

  const getSupplierDetails = useCallback(
    (supId?: number) => {
      dispatch(supplierActions.getSupplierDetails.request(supId));
    },
    [dispatch]
  );

  const createSupplier = useCallback(
    (supplier: Supplier) => {
      dispatch(supplierActions.createSupplier.request(supplier));
    },
    [dispatch]
  );

  const updateSupplier = useCallback(
    (supplier: Supplier) => {
      dispatch(supplierActions.updateSupplier.request(supplier));
    },
    [dispatch]
  );

  useEffect(() => {
    if (id) getSupplierDetails(id);
    return () => {
      getSupplierDetails();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSave = (supplier: Supplier) => {
    const filteredSupplier = {};
    const data: any = supplier;
    Object.keys(supplier)
      .filter((field) => data[field] !== null)
      .forEach((field) => {
        Object.assign(filteredSupplier, { [field]: data[field] });
      });
    if (!id) {
      createSupplier(filteredSupplier as Supplier);
    } else {
      supplier.id = id;
      updateSupplier(filteredSupplier as Supplier);
    }
    props.onSave(supplier);
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
        validate={validate(t, validationSchema)}
      />
    </>
  );
};

export default SupplierEdit;
