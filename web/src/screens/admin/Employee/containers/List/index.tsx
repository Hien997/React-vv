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
import { useMemoSelector } from 'src/hooks';
import { ToastContainer } from 'react-toastify';
import { showToastMessage } from 'src/components/admin/message';
import { useTranslation } from 'react-i18next';
import {
  employeeActions,
  employeeSelectors,
} from '../../../../../state/ducks/employee';
import { Employee } from '../../../../../state/models/employee';
import ListView, { ListViewProps } from '../../views/List';
import EmployeeEdit, { EmployeeEditProps } from '../Edit';
import EmployeeImport, { EmployeeImportProps } from '../Import';
import { EmployeeListRequest } from '../../../../../state/api-models/employee';
import {
  Filter,
  PaginationRequest,
  Sort,
  BulkRequest,
} from '../../../../../state/api-models/common';
import BulkConfirmation, {
  BulkConfirmationProps,
} from '../../views/List/BulkConfirmation';

enum Event {
  None,
  Insert,
  Edit,
  Import,
  Bulk,
}

const EmployeesList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('employee');

  const [editingID, setEditingID] = useState('');
  const [currentEvent, setCurrentEvent] = useState<Event>(Event.None);

  const filterRef = useRef<Filter>({});
  const paginationRef = useRef<PaginationRequest>({});
  const sortRef = useRef<Sort>({});
  const bulkRef = useRef<BulkRequest>({ action: '', ids: [] });

  const listResponse = useMemoSelector(employeeSelectors.getEmployeeList);
  // const importResponse = useMemoSelector(employeeSelectors.getEmployeeImport);
  const createResponse = useMemoSelector(employeeSelectors.getEmployeeCreate);
  const updateResponse = useMemoSelector(employeeSelectors.getEmployeeUpdate);
  const deleteResponse = useMemoSelector(employeeSelectors.getEmployeeDelete);
  const bulkResponse = useMemoSelector(employeeSelectors.getEmployeeBulk);

  const dataList = useMemo(() => {
    let ret: Employee[] = [];
    if (listResponse && listResponse.data) {
      ret = listResponse.data.users;
    }

    return ret;
  }, [listResponse]);

  const getEmployeeList = useCallback(() => {
    const request: EmployeeListRequest = {
      filter: filterRef.current,
      pagination: paginationRef.current,
      sort: sortRef.current,
    };
    dispatch(employeeActions.getEmployeeList.request(request));
  }, [dispatch]);

  const deleteEmployee = useCallback(
    (id: string) => {
      dispatch(employeeActions.deleteEmployee.request(id));
    },
    [dispatch]
  );

  const bulkEmployee = useCallback(
    (action: string, ids: string[]) => {
      dispatch(employeeActions.bulkEmployees.request({ action, ids }));
    },
    [dispatch]
  );

  useEffect(() => {
    getEmployeeList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (createResponse && createResponse.success) {
      setCurrentEvent(Event.None);
      showToastMessage(t('employee:successful_adding'), 'success');

      getEmployeeList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getEmployeeList, createResponse]);

  useEffect(() => {
    if (updateResponse && updateResponse.success) {
      setCurrentEvent(Event.None);
      showToastMessage(t('employee:successful_updating'), 'success');

      getEmployeeList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getEmployeeList, updateResponse]);

  useEffect(() => {
    if (deleteResponse && deleteResponse.success) {
      setCurrentEvent(Event.None);
      showToastMessage(t('employee:successful_deleting'), 'success');

      getEmployeeList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getEmployeeList, deleteResponse]);

  useEffect(() => {
    if (bulkResponse && bulkResponse.success) {
      setCurrentEvent(Event.None);
      showToastMessage(t('employee:successful_bulking'), 'success');
      getEmployeeList();
    }
  }, [getEmployeeList, bulkResponse, t]);

  const onSearch = (values: Filter) => {
    filterRef.current = values;
    getEmployeeList();
  };

  const onInsert = () => {
    setEditingID('');
    setCurrentEvent(Event.Insert);
  };

  const onImport = () => {
    setEditingID('');
    setCurrentEvent(Event.Import);
  };

  const onEdit = (id: string) => {
    setEditingID(id);
    setCurrentEvent(Event.Edit);
  };

  const onDelete = (id: string) => {
    deleteEmployee(id);
  };

  const onBulkActions = (action: string, rows: Employee[]) => {
    if (rows && rows.length > 0) {
      setEditingID('');
      setCurrentEvent(Event.Bulk);
      const ids = rows.map((item) => item.id);
      bulkRef.current = { action, ids };
    } else {
      showToastMessage(t('employee:none_selected'), 'info');
    }
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
    getEmployeeList();
  };
  /**
   * Assign a callback function which will be called after the size per page (number of rows per page)
   * has been changed.
   * This function takes one argument: sizePerPage.
   *   `sizePerPage`: The new number of rows to display in one page.
   */
  const onSizePerPageList = (sizePerPage: number) => {
    paginationRef.current.items_per_page = sizePerPage;
    getEmployeeList();
  };

  const onSortChange = (
    sortName: string | number | symbol,
    sortOrder: SortOrder
  ) => {
    sortRef.current[sortName as string] = sortOrder;
    getEmployeeList();
  };

  const listViewProps: ListViewProps = {
    data: dataList,
    onImport,
    onInsert,
    onEdit,
    onDelete,
    onSearch,
    onSortChange,
    onPageChange,
    onSizePerPageList,
    onBulkActions,
  };

  const onCancel = () => {
    setEditingID('');
    setCurrentEvent(Event.None);
  };

  const onSave = (values: Employee) => {
    setEditingID('');
    setCurrentEvent(Event.None);
  };

  const editProps: EmployeeEditProps = {
    id: editingID,
    onCancel,
    onSave,
  };

  const importProps: EmployeeImportProps = {
    onCancel,
    onImport,
  };

  const onCancelBulkConfirmation = () => {
    bulkRef.current = { action: '', ids: [] };
    setCurrentEvent(Event.None);
  };

  const onOKBulkConfirmation = () => {
    const { action, ids } = bulkRef.current;
    bulkEmployee(action, ids);
  };

  const bulkProps: BulkConfirmationProps = {
    bulkAction: bulkRef.current.action,
    onCancel: onCancelBulkConfirmation,
    onOK: onOKBulkConfirmation,
  };

  const containerStyle = {
    zIndex: 1999,
  };

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        style={containerStyle}
      />
      <ListView {...listViewProps} />
      {(currentEvent === Event.Insert || currentEvent === Event.Edit) && (
        <EmployeeEdit {...editProps} />
      )}
      {currentEvent === Event.Import && <EmployeeImport {...importProps} />}
      {currentEvent === Event.Bulk && <BulkConfirmation {...bulkProps} />}
    </>
  );
};

export default EmployeesList;
