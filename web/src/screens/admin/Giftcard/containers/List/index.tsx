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
import {
  giftcardActions,
  giftcardSelectors,
} from '../../../../../state/ducks/giftcard';
import { Giftcard } from '../../../../../state/models/giftcard';
import { useMemoSelector } from 'src/hooks';
import ListView, { ListViewProps } from '../../views/List';
import GiftcardEdit, { GiftcardEditProps } from '../Edit';
import GiftcardHistory, { GiftcardHistoryProps } from '../History';
import GiftcardCustomerView, {
  GiftcardCustomerViewProps,
} from '../CustomerView';
import BarCodesComponent from '../Barcode';
import { GiftcardListRequest } from '../../../../../state/api-models/giftcard';
import {
  Filter,
  PaginationRequest,
  Sort,
} from '../../../../../state/api-models/common';
import { BarCodeType } from '../../types';
import { Code } from '../../../../../config/code';

const GiftcardsList = () => {
  const dispatch = useDispatch();
  const response = useMemoSelector(giftcardSelectors.getGiftcardList);
  const responseCreate = useMemoSelector(giftcardSelectors.getGiftcardCreated);
  const responseDelete = useMemoSelector(giftcardSelectors.getGiftcardDeleted);
  const responseUpdate = useMemoSelector(giftcardSelectors.getGiftcardUpdate);
  const responseBulk = useMemoSelector(giftcardSelectors.getGiftcardBulk);
  const [editingID, setEditingID] = useState('');
  const [clickID, setClickID] = useState('');
  const [editing, setEditing] = useState(false);
  const [isShowBarcode, setIsShowBarcode] = useState(false);
  const [isShowHistory, setIsShowHistory] = useState(false);
  const [isViewCustomer, setIsViewCustomer] = useState(false);
  const [isDisableDetails, setIsDisableDetails] = useState(true);

  const [arrItemSelected, setArrItemSelected] = useState<Giftcard[]>([]);

  const filterRef = useRef<Filter>({});
  const paginationRef = useRef<PaginationRequest>({});
  const barcodesTypeRef = useRef<BarCodeType>(BarCodeType.Lable);
  const sortRef = useRef<Sort>({});

  const dataList = useMemo(() => {
    const ret: Giftcard[] = [];
    if (response && response.data) {
      response.data.giftcards.map((data) => {
        if (response && response.data) {
          ret.push({
            ...data,
            user_id: Code.User.filter(
              (item: any) => data.user_id === item.value
            )[0].label,
            balance: (Number(data.value) - Number(data.value_use)).toString(),
          });
        }
        return ret;
      });
    }

    return ret;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const getGiftcardList = useCallback(() => {
    const request: GiftcardListRequest = {
      filter: filterRef.current,
      pagination: paginationRef.current,
      sort: sortRef.current,
    };
    dispatch(giftcardActions.getGiftcardList.request(request));
  }, [dispatch]);

  const deleteGiftcard = useCallback(
    (id: string) => {
      dispatch(giftcardActions.deleteGiftcard.request(id));
    },
    [dispatch]
  );

  const bulkGiftcard = useCallback(
    (action: string, ids: string[]) => {
      dispatch(giftcardActions.bulkGiftcards.request({ action, ids }));
    },
    [dispatch]
  );

  useEffect(() => {
    getGiftcardList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      (responseCreate && responseCreate.success) ||
      (responseDelete && responseDelete.success) ||
      (responseUpdate && responseUpdate.success) ||
      (responseBulk && responseBulk.success)
    ) {
      getGiftcardList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseCreate, responseDelete, responseUpdate, responseBulk]);

  const onSearch = (values: Filter) => {
    filterRef.current = values;
    getGiftcardList();
  };

  const onInsert = () => {
    setEditingID('');
    setEditing(true);
  };

  const onEdit = (id: string) => {
    setEditingID(id);
    setEditing(true);
  };

  const onHistory = (id: string) => {
    setClickID(id);
    setIsShowHistory(true);
  };

  const onViewCustomer = (id: string) => {
    setClickID(id);
    setIsViewCustomer(true);
  };

  const onDelete = (id: string) => {
    deleteGiftcard(id);
  };

  const onBulkActions = (action: string, rows: Giftcard[]) => {
    const ids = rows.map((item) => item.id);
    bulkGiftcard(action, ids);
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
    getGiftcardList();
  };
  /**
   * Assign a callback function which will be called after the size per page (number of rows per page)
   * has been changed.
   * This function takes one argument: sizePerPage.
   *   `sizePerPage`: The new number of rows to display in one page.
   */
  const onSizePerPageList = (sizePerPage: number) => {
    paginationRef.current.items_per_page = sizePerPage;
    getGiftcardList();
  };

  const onSortChange = (
    sortName: string | number | symbol,
    sortOrder: SortOrder
  ) => {
    sortRef.current[sortName as string] = sortOrder;
    getGiftcardList();
  };

  const onShowBarCodes = (type: BarCodeType) => {
    setIsShowBarcode(true);
    barcodesTypeRef.current = type;
  };

  const listViewProps: ListViewProps = {
    data: dataList,
    onInsert,
    onEdit,
    onHistory,
    onViewCustomer,
    onDelete,
    onSearch,
    onSortChange,
    onPageChange,
    onSizePerPageList,
    onBulkActions,
    setArrItemSelected,
    arrItemSelected,
    onShowBarCodes,
    setIsShowHistory,
    setIsViewCustomer,
    isDisableDetails,
    setIsDisableDetails,
  };

  const onCancel = () => {
    if (editing) {
      setEditingID('');
      setEditing(false);
    }

    if (isShowBarcode) {
      setIsShowBarcode(false);
    }

    if (isShowHistory) {
      setIsShowHistory(false);
    }

    if (isViewCustomer) {
      setIsViewCustomer(false);
    }
  };

  const onSave = (values: Giftcard) => {
    setEditingID('');
    setEditing(false);
  };

  const editProps: GiftcardEditProps = {
    id: editingID,
    onCancel,
    onSave,
  };

  const historyProps: GiftcardHistoryProps = {
    id: clickID,
    onCancel,
  };

  const customerViewProps: GiftcardCustomerViewProps = {
    id: clickID,
    onCancel,
  };

  const barcodeProps = {
    onCancel,
    data: arrItemSelected,
    type: barcodesTypeRef.current,
  };

  return (
    <>
      <ListView {...listViewProps} />
      {editing && <GiftcardEdit {...editProps} />}
      {isShowBarcode && <BarCodesComponent {...barcodeProps} />}
      {isShowHistory && <GiftcardHistory {...historyProps} />}
      {isViewCustomer && <GiftcardCustomerView {...customerViewProps} />}
    </>
  );
};

export default React.memo(GiftcardsList);
