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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { employeeActions } from '../../../../../state/ducks/employee';
import { actions, selectors } from '../../../../../state/ducks/membership';
import { useMemoSelector } from 'src/hooks';
import ListView, { ListViewProps } from '../../views/List';
import { MemberShipListRequest } from '../../../../../state/api-models/membership';
import {
  Filter,
  PaginationRequest,
  Sort,
} from '../../../../../state/api-models/common';
import { Membership } from '../../../../../state/models/membership';
import { ShowComponentType } from '../../types';
import MemberEdit, { MemberEditProps } from '../Edit';
import MenbershipHistory, { HistoryProps } from '../History';

const EmployeesList = () => {
  const { t } = useTranslation('membership');

  const dispatch = useDispatch();

  const [editingID, setEditingID] = useState('');
  const [isCreate, setIsCreate] = useState(false);
  const [showType, setShowType] = useState(ShowComponentType.None);

  const response = useMemoSelector(selectors.getMembershipList);
  const responseCreate = useMemoSelector(selectors.getCreate);
  const responseDelete = useMemoSelector(selectors.getDeleteMembership);
  const responseHistory = useMemoSelector(selectors.getHistoryMembership);

  const filterRef = useRef<Filter>({});
  const paginationRef = useRef<PaginationRequest>({});
  const sortRef = useRef<Sort>({});
  const itemSelectedRef = useRef<Membership>();

  const dataList = useMemo(() => {
    let ret: Membership[] = [];
    if (response && response.data) {
      ret = response.data.memberships;

      if (responseCreate && responseCreate.data && isCreate) {
        ret.push(responseCreate.data);
        setIsCreate(false);
      }
    }
    return ret;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const getMemberShipList = useCallback(() => {
    const request: MemberShipListRequest = {
      filter: filterRef.current,
      pagination: paginationRef.current,
      sort: sortRef.current,
    };
    dispatch(actions.getMembershipList.request(request));
  }, [dispatch]);

  const deleteMembership = useCallback(
    (id: string) => {
      dispatch(actions.deleteMembership.request({ id }));
    },
    [dispatch]
  );

  const bulkEmployee = useCallback(
    (action: string, ids: string[]) => {
      dispatch(employeeActions.bulkEmployees.request({ action, ids }));
    },
    [dispatch]
  );

  const getHistoryMembership = useCallback(
    (id: string) => {
      dispatch(actions.historyMembership.request({ id }));
    },
    [dispatch]
  );

  const alertSuccess = () => {
    const alertCus = (
      <b style={{ fontSize: '18px' }}>
        {t('membership:unit_cannot_be_deleted')}
      </b>
    );

    toast.success(alertCus, {
      autoClose: 5000,
      position: 'bottom-right',
      hideProgressBar: true,
    });
  };

  useEffect(() => {
    getMemberShipList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (responseDelete?.success) {
      alertSuccess();
      getMemberShipList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseDelete]);

  useEffect(() => {
    if (responseHistory.response?.success) {
      setShowType(ShowComponentType.History);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseHistory]);

  const onSearch = (values: Filter) => {
    filterRef.current = values;
    getMemberShipList();
  };

  const onInsert = () => {
    setEditingID('');
    setShowType(ShowComponentType.Edit);
  };

  const onEdit = (id: string) => {
    setEditingID(id);
    setShowType(ShowComponentType.Edit);
  };

  const onDelete = (id: string) => {
    deleteMembership(id);
  };

  const onBulkActions = (action: string, rows: Membership[]) => {
    const ids = rows.map((item) => item.id);
    bulkEmployee(action, ids);
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
    getMemberShipList();
  };
  /**
   * Assign a callback function which will be called after the size per page (number of rows per page)
   * has been changed.
   * This function takes one argument: sizePerPage.
   *   `sizePerPage`: The new number of rows to display in one page.
   */
  const onSizePerPageList = (sizePerPage: number) => {
    paginationRef.current.items_per_page = sizePerPage;
    getMemberShipList();
  };

  const onSortChange = (
    sortName: string | number | symbol,
    sortOrder: SortOrder
  ) => {
    sortRef.current[sortName as string] = sortOrder;
    getMemberShipList();
  };

  const onHistory = (values: Membership) => {
    getHistoryMembership(values.id);
    itemSelectedRef.current = values;
  };

  const listViewProps: ListViewProps = {
    data: dataList,
    onInsert,
    onEdit,
    onDelete,
    onSearch,
    onSortChange,
    onPageChange,
    onSizePerPageList,
    onBulkActions,
    onHistory,
  };

  const onCancel = () => {
    if (showType === ShowComponentType.Edit) {
      setEditingID('');
    }
    setShowType(ShowComponentType.None);
  };

  const onSave = (values: Membership) => {
    setEditingID('');
    setShowType(ShowComponentType.None);
  };

  const editProps: MemberEditProps = {
    id: editingID,
    onCancel,
    onSave,
    getMemberShipList,
  };

  const historyProps: HistoryProps = {
    onCancel,
    item: itemSelectedRef.current,
  };

  return (
    <>
      <ToastContainer />
      <ListView {...listViewProps} />
      {showType === ShowComponentType.Edit && <MemberEdit {...editProps} />}
      {showType === ShowComponentType.History && (
        <MenbershipHistory {...historyProps} />
      )}
    </>
  );
};

export default React.memo(EmployeesList);
