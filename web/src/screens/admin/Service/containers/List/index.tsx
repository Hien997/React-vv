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
import { actions, selectors } from '../../../../../state/ducks/service';
import { Service } from '../../../../../state/models/service';
import { useMemoSelector } from 'src/hooks';
import {
  ServiceListRequest,
  ServiceUpdateRequest,
} from '../../../../../state/api-models/service';
import {
  Filter,
  PaginationRequest,
  Sort,
} from '../../../../../state/api-models/common';
import ListView from '../../views/List';
import ServiceEdit, { SeviceEditProps } from '../Edit';
import BarCodesComponent from '../../views/List/Barcodes';
import { BarCodeType, ShowComponentType } from '../../types';
import OptionComponent from '../Option';
import ImportExcelComponent from '../ImportExcel';

const ServiceList = () => {
  const dispatch = useDispatch();
  const [editingID, setEditingID] = useState('');
  const [showComponentType, setShowComponentType] = useState(
    ShowComponentType.None
  );
  const [arrItemSelected, setArrItemSelected] = useState<Service[]>([]);

  const response = useMemoSelector(selectors.getServiceList);
  const serviceDelete = useMemoSelector(selectors.getServiceDelete);

  const filterRef = useRef<Filter>({});
  const barcodesTypeRef = useRef<BarCodeType>(BarCodeType.Lable);
  const paginationRef = useRef<PaginationRequest>({});
  const optionRef = useRef<Service>();
  const sortRef = useRef<Sort>({});

  const dataList = useMemo(() => {
    let ret: Service[] = [];
    if (response && response.data) {
      ret = response.data.services;
    }

    return ret;
  }, [response]);

  const getServiceList = useCallback(() => {
    const request: ServiceListRequest = {
      filter: filterRef.current,
      pagination: paginationRef.current,
      sort: sortRef.current,
    };
    dispatch(actions.getServiceList.request(request));
  }, [dispatch]);

  const deleteService = useCallback(
    (id: string) => {
      dispatch(actions.deleteService.request(id));
    },
    [dispatch]
  );

  const updateService = useCallback(
    (service: ServiceUpdateRequest) => {
      dispatch(actions.updateService.request(service));
    },
    [dispatch]
  );

  const onShowBarCodes = (type: BarCodeType) => {
    setShowComponentType(ShowComponentType.Barcodes);
    barcodesTypeRef.current = type;
  };

  const onShowOption = (row: Service) => {
    optionRef.current = row;
    setShowComponentType(ShowComponentType.EditOption);
  };

  const onImportExcel = () => {
    setShowComponentType(ShowComponentType.Excel);
  };

  const bulkService = useCallback(
    (action: string, ids: string[]) => {
      dispatch(actions.bulkService.request({ action, ids }));
    },
    [dispatch]
  );

  useEffect(() => {
    getServiceList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (serviceDelete?.success) {
      alert('Deleted');
      getServiceList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceDelete]);

  const onSearch = (values: Filter) => {
    filterRef.current = values;
    getServiceList();
  };

  const onInsert = () => {
    setEditingID('');
    setShowComponentType(ShowComponentType.Edit);
  };

  const onEdit = (id: string) => {
    setEditingID(id);
    setShowComponentType(ShowComponentType.Edit);
  };

  const onDelete = (id: string) => {
    deleteService(id);
  };

  const onBulkActions = (action: string, rows: Service[]) => {
    const ids = rows.map((item) => item.id);
    bulkService(action, ids);
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
    getServiceList();
  };
  /**
   * Assign a callback function which will be called after the size per page (number of rows per page)
   * has been changed.
   * This function takes one argument: sizePerPage.
   *   `sizePerPage`: The new number of rows to display in one page.
   */
  const onSizePerPageList = (sizePerPage: number) => {
    paginationRef.current.items_per_page = sizePerPage;
    getServiceList();
  };

  const onSortChange = (
    sortName: string | number | symbol,
    sortOrder: SortOrder
  ) => {
    sortRef.current[sortName as string] = sortOrder;
    getServiceList();
  };

  const listViewProps = {
    data: dataList,
    onInsert,
    onEdit,
    onDelete,
    onSearch,
    onSortChange,
    onPageChange,
    onSizePerPageList,
    onBulkActions,
    setArrItemSelected,
    arrItemSelected,
    onShowBarCodes,
    onShowOption,
    onImportExcel,
    updateService,
  };

  const onCancel = () => {
    if (showComponentType === ShowComponentType.Edit) {
      setEditingID('');
    }
    setShowComponentType(ShowComponentType.None);
  };

  const editProps: SeviceEditProps = {
    id: editingID,
    onCancel,
    getServiceList,
  };

  const barcodeProps = {
    onCancel: onCancel,
    data: arrItemSelected,
    type: barcodesTypeRef.current,
  };

  const optionProps = {
    onCancelOption: onCancel,
    data: optionRef.current,
    getServiceList,
  };

  const importProps = {
    onCancel: onCancel,
  };

  return (
    <>
      <ListView {...listViewProps} />
      {showComponentType === ShowComponentType.Edit && (
        <ServiceEdit {...editProps} />
      )}
      {showComponentType === ShowComponentType.Barcodes && (
        <BarCodesComponent {...barcodeProps} />
      )}
      {showComponentType === ShowComponentType.EditOption && (
        <OptionComponent {...optionProps} />
      )}
      {showComponentType === ShowComponentType.Excel && (
        <ImportExcelComponent {...importProps} />
      )}
    </>
  );
};

export default React.memo(ServiceList);
