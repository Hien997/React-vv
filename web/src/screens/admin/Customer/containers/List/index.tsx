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
import {
  customerActions,
  customerSelectors,
} from '../../../../../state/ducks/customer';
import {
  customersGroupActions,
  customersGroupSelectors,
} from '../../../../../state/ducks/customersGroup';
import {
  Customer,
  CustomerDisplay,
  CustomersGroup,
  initCustomersGroup,
  initCustomer,
} from '../../../../../state/models/customer';
import ListView, { ListViewProps } from '../../views/List';
import CustomerEdit, { CustomerEditProps } from '../Edit';
import CustomerHistoryPoint, { ListHistoryPointProps } from '../../views/List/CustomerHistoryPoint';
import { PaginationRequest, Filter, Sort } from '../../../../../state/api-models/common';
import CustomerReviewer, { ListReviewerProps } from '../../views/List/CustomerReviewer';
import { CustomerBulkRequest, CustomerImportRequest } from '../../../../../state/api-models/customer';
import { BULK_ACTIONS_API } from '../../constants';

const CustomersList = () => {
  const dispatch = useDispatch();
  const response = useMemoSelector(customerSelectors.getCustomerList);
  const responseGroup = useMemoSelector(
    customersGroupSelectors.getcustomersGroupList
  );
  const inputSearchCustomer = useMemoSelector(customerSelectors.getInputSearch);

  const bulkAction = useMemoSelector(customerSelectors.getBulkActionReponse);
  const importAction = useMemoSelector(customerSelectors.getImportActionReponse);

  const [editingID, setEditingID] = useState('');
  const [editing, setEditing] = useState(false);
  const [pointHistoryShow, setPointHistoryShow] = useState(false);
  const [reviewsShow, setReviewsShow] = useState(false);
  const [pageC, setPage] = useState(0);
  const [sizePerPageC, setSizePerPage] = useState(5);
  const [sortNameC, setSortName] = useState<string | number | symbol>('');
  const [sortOrderC, setSortOrder] = useState<SortOrder>('asc');

  const filterRef = useRef<Filter>({});
  const paginationRef = useRef<PaginationRequest>({});
  const sortRef = useRef<Sort>({});

  const customerSelect = useRef<Customer>(initCustomer);

  const dataList = useMemo(() => {
    let ret: any[] = [];
    let data: CustomerDisplay[] = [];
    if (response && response.data) {
      ret = response.data.customers;
    }

    data = ret.map((dataDisplay: Customer) => {
      let groupName = '';
      if (responseGroup && responseGroup.data) {
        const customersGroup: CustomersGroup =
          responseGroup.data.customersGroup.find(
            (element) => element.id == dataDisplay.group_id
          ) || initCustomersGroup;
        groupName = customersGroup.group_name;
      }
      return {
        ...dataDisplay,
        groupName,
      };
    });
    return data;
  }, [response, responseGroup]);

  const getCustomersGroupList = () => {
    const request = {};
    dispatch(customersGroupActions.getCustomersGroupList.request(request));
  };

  const getCustomerList = (request: any) => {
    dispatch(customerActions.getCustomerList.request(request));
  };

  const setInputSearchCustomer = (data: any) => {
    dispatch(customerActions.inputSearchCustomer(data));
  };

  const getHistoryPointData = useCallback(
    (request: any) => {
      dispatch(customerActions.historyPointAction.request(request));
    },
    [dispatch]
  );

  const getReviewsData = useCallback(
    (request: any) => {
      dispatch(customerActions.reviewsAction.request(request));
    },
    [dispatch]
  );

  const deleteCustomerbyId = useCallback(
    (id: string) => {
      dispatch(customerActions.deleteCustomer.request(id));
    },
    [dispatch]
  );

  const customerBulk = useCallback(
    (bulkRequest: CustomerBulkRequest) => {
      dispatch(customerActions.bulkCustomer.request(bulkRequest));
    },
    [dispatch]
  );

  const customerImport = useCallback(
    (importRequest: CustomerImportRequest) => {
      dispatch(customerActions.importCustomer.request(importRequest));
    },
    [dispatch]
  );

  useEffect(() => {
    if (editingID !== '' && pointHistoryShow) {
      const request = {
        filter: { id: editingID },
        pagination: paginationRef.current,
        sort: sortRef.current,
      };
      getHistoryPointData(request);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    paginationRef,
    sortRef,
    pageC,
    sortNameC,
    sizePerPageC,
    sortOrderC,
    editingID,
    pointHistoryShow,
  ]);

  useEffect(() => {
    if (editingID !== '' && reviewsShow) {
      const request = {
        filter: { id: editingID },
        pagination: paginationRef.current,
        sort: sortRef.current,
      };
      getReviewsData(request);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    paginationRef,
    sortRef,
    pageC,
    sortNameC,
    sizePerPageC,
    sortOrderC,
    editingID,
    reviewsShow,
  ]);

  useEffect(() => {
    if (!editing && !pointHistoryShow && !reviewsShow) {
      const request = {
        ...inputSearchCustomer,
        pagination: paginationRef.current,
        sort: sortRef.current,
      };
      setInputSearchCustomer(request);
      getCustomerList(request);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    paginationRef,
    sortRef,
    pageC,
    sortNameC,
    sizePerPageC,
    sortOrderC,
    editing,
  ]);

  useEffect(() => {
    getCustomersGroupList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (bulkAction && bulkAction.success) {
      const request = {
        ...inputSearchCustomer,
        pagination: paginationRef.current,
        sort: sortRef.current,
      };
      getCustomerList(request);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bulkAction]);

  useEffect(() => {
    if (importAction && importAction.success) {
      const request = {
        ...inputSearchCustomer,
        pagination: paginationRef.current,
        sort: sortRef.current,
      };
      getCustomerList(request);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [importAction]);


  const onInsert = () => {
    setEditingID('');
    setEditing(true);
  };

  const onEdit = (id: string) => {
    setEditingID(id);
    setEditing(true);
  };

  const onDelete = (id: string) => {
    deleteCustomerbyId(id);
  };

  const onBulkActions = (action: string, data: any) => {
    if (action === BULK_ACTIONS_API.DeleteList) {
      const bulkRequest: CustomerBulkRequest = {
        action,
        ids: data.map((customer) => {
          return customer.id;
        })
      }
      // bulkRequest.action = "delete/List";
      customerBulk(bulkRequest);
    }

  }

  const onImport = (data: any) => {

    const dataForm: FormData = new FormData();
    if (data) {
      dataForm.append('file', data);
    }
    const importRequest: CustomerImportRequest = {
      formdata: dataForm
    }
    customerImport(importRequest);

  }

  const onOpenCustomerHistoryPoint = (id: string) => {
    setEditingID(id);
    getInfoCustomer(id);
    setPointHistoryShow(true);
  };

  const onOpenCustomerReviewer = (id: string) => {
    setEditingID(id);
    getInfoCustomer(id);
    setReviewsShow(true);
  };

  const onCancel = () => {
    setEditingID('');
    setEditing(false);
    setPointHistoryShow(false);
    setReviewsShow(false);
  };

  const onSave = (values: Customer) => {
    setEditingID('');
    setEditing(false);
  };

  const onSearch = (values: Customer) => {
    filterRef.current = values;
    const request = {
      filter: filterRef.current,
      pagination: paginationRef.current,
      sort: sortRef.current,
    };

    if (JSON.stringify(request) !== JSON.stringify(inputSearchCustomer)) {
      setInputSearchCustomer(request);
      getCustomerList(request);
    }
  };

  const onPageChange = (page: number, sizePerPage: number) => {
    const pageChange = {
      page,
      items_per_page: sizePerPage,
    };
    paginationRef.current = pageChange;
    setPage(page);
    setSizePerPage(sizePerPage);
  };

  const onSizePerPageList = (sizePerPage: number) => {
    const pageChange = {
      page: paginationRef.current.page,
      items_per_page: sizePerPage,
    };
    paginationRef.current = pageChange;
    setSizePerPage(sizePerPage);
  };

  const getInfoCustomer = (id: string) => {
    let customerInfo;
    if (
      response &&
      response.data &&
      response.data.customers &&
      response.data.customers.length > 0
    ) {
      customerInfo = response.data.customers.find((customer) => {
        return customer.id == id;
      });
    }
    customerSelect.current = customerInfo || initCustomer;
  };

  const onSortChange = (
    sortName: string | number | symbol,
    sortOrder: SortOrder
  ) => {
    const sort: Sort = { [sortName as string]: sortOrder };
    sortRef.current = sort;
    setSortName(sortName);
    setSortOrder(sortOrder);
  };

  const listViewProps: ListViewProps = {
    data: dataList,
    onInsert,
    onEdit,
    onDelete,
    onSearch,
    onImport,
    onPageChange,
    onSizePerPageList,
    onSortChange,
    onOpenCustomerHistoryPoint,
    onOpenCustomerReviewer,
    onBulkActions,
  };

  const editProps: CustomerEditProps = {
    id: editingID,
    onCancel,
    onSave,
  };

  const historyProps: ListHistoryPointProps = {
    data: customerSelect.current,
    onPageChange,
    onSizePerPageList,
    onSortChange,
    onCancel,
  };
  const reviewesProps: ListReviewerProps = {
    data: customerSelect.current,
    onPageChange,
    onSizePerPageList,
    onSortChange,
    onCancel,
  };

  return (
    <>
      <ListView {...listViewProps} />
      {editing && <CustomerEdit {...editProps} />}
      {pointHistoryShow && <CustomerHistoryPoint {...historyProps} />}
      {reviewsShow && <CustomerReviewer {...reviewesProps} />}
    </>
  );
};

export default CustomersList;
