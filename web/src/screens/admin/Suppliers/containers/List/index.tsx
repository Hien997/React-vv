import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from 'react';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { useDispatch } from 'react-redux';
import { SortOrder } from 'react-bootstrap-table';
import { supplierActions, supplierSelectors } from 'src/state/ducks/supplier';
import { useMemoSelector } from 'src/hooks';
import { Filter, PaginationRequest, Sort } from 'src/state/api-models/common';
import { SupplierListRequest } from 'src/state/api-models/supplier';
import { Supplier, SupplierForm } from 'src/state/models/supplier';
import ListView, { ListViewProps } from '../../views/List';
import SupplierEdit, { SupplierEditProps } from '../Edit';

const SuppliersList = () => {
  const dispatch = useDispatch();
  const response = useMemoSelector(supplierSelectors.getSupplierList);
  const pagination = useMemoSelector(supplierSelectors.getSupplierPagination);
  const [editingID, setEditingID] = useState(0);
  const [editing, setEditing] = useState(false);

  const filterRef = useRef<Filter>({});
  const paginationRef = useRef<PaginationRequest>({
    page: 1,
    items_per_page: 5,
  });
  const sortRef = useRef<Sort>({});

  const dataList = useMemo(() => {
    let ret: Supplier[] = [];
    if (response && response.data) {
      ret = response.data.list;
    }

    return ret;
  }, [response]);

  const getSupplierList = useCallback(() => {
    const request: SupplierListRequest = {
      filter: filterRef.current,
      pagination: paginationRef.current,
      sort: sortRef.current,
    };
    dispatch(supplierActions.getSupplierList.request(request));
  }, [dispatch]);

  const deleteSupplier = useCallback(
    (id: number) => {
      dispatch(supplierActions.deleteSupplier.request(id));
    },
    [dispatch]
  );

  const bulkSupplier = useCallback(
    (action: string, ids: number[]) => {
      dispatch(supplierActions.bulkSuppliers.request({ action, ids }));
    },
    [dispatch]
  );

  useEffect(() => {
    getSupplierList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onInsert = () => {
    setEditingID(0);
    setEditing(true);
  };

  const onEdit = (id: number) => {
    setEditingID(id);
    setEditing(true);
  };

  const onDelete = (id: number) => {
    deleteSupplier(id);
  };

  const onBulkActions = (action: string, rows: Supplier[]) => {
    const ids = rows.map((item) => item.id);
    bulkSupplier(action, ids);
  };

  /**
   * Assign a callback function which will be called after page changed.
   * This function takes two argument: page and sizePerPage.
   *   `page`: New page number
   *   `sizePerPage`: The number of rows to display in one page.
   */
  const onPageChange = (page: number, sizePerPage: number) => {
    paginationRef.current.page = page;
    paginationRef.current.items_per_page = sizePerPage;
    getSupplierList();
  };

  const onSearch = (values: Supplier) => {
    filterRef.current = values;
    getSupplierList();
  };

  const onClear = () => {
    filterRef.current = {};
    getSupplierList();
  };

  /**
   * Assign a callback function which will be called after the size per page (number of rows per page)
   * has been changed.
   * This function takes one argument: sizePerPage.
   *   `sizePerPage`: The new number of rows to display in one page.
   */
  const onSizePerPageList = (sizePerPage: number) => {
    paginationRef.current.items_per_page = sizePerPage;
    getSupplierList();
  };

  const onSortChange = (
    sortName: string | number | symbol,
    sortOrder: SortOrder
  ) => {
    sortRef.current[sortName as string] = sortOrder;
    getSupplierList();
  };

  const listViewProps: ListViewProps = {
    data: dataList,
    pagination,
    onInsert,
    onEdit,
    onDelete,
    onSearch,
    onClear,
    onSortChange,
    onPageChange,
    onSizePerPageList,
    onBulkActions,
  };

  const onCancel = () => {
    setEditingID(0);
    setEditing(false);
  };

  const onSave = (values: SupplierForm) => {
    setEditingID(0);
    setEditing(false);
  };

  const editProps: SupplierEditProps = {
    id: editingID,
    onCancel,
    onSave,
  };

  return (
    <>
      <ListView {...listViewProps} />
      {editing && <SupplierEdit {...editProps} />}
    </>
  );
};

export default SuppliersList;
