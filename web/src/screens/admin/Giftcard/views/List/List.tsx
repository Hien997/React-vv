import React, { useRef } from 'react';
import { Button, Col, Row } from 'reactstrap';
import {
  TableHeaderColumn,

} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { useTranslation } from 'react-i18next';
import { Giftcard } from '../../../../../state/models/giftcard';
import * as Constants from '../../constants';

import { SortOrder } from '../../../../../state/api-models/common';
import { SearchResult } from '../../../../../components/admin/search';


export type ListProps = {
  data: Giftcard[];
  bulkActions?: any;
  onBulkActions?: (action: string, rows: Giftcard[]) => void;
  onEdit: (id: string) => void;
  onHistory: (id: string) => void;
  onViewCustomer: (id: string) => void;
  onInsert: VoidFunction;
  onDelete: (id: string) => void;
  /**
   * Assign a callback function which will be called after page changed.
   * This function takes two argument: page and sizePerPage.
   *   `page`: New page number
   *   `sizePerPage`: The number of rows to display in one page.
   */
  onPageChange?: (page: number, sizePerPage: number) => void;
  /**
   * Assign a callback function which will be called after the size per page (number of rows per page)
   * has been changed.
   * This function takes one argument: sizePerPage.
   *   `sizePerPage`: The new number of rows to display in one page.
   */
  onSizePerPageList?: (sizePerPage: number) => void;
  onSortChange?: (
    sortName: string | number | symbol,
    sortOrder: SortOrder
  ) => void;
  setArrItemSelected: Function;
  arrItemSelected: Giftcard[];
  setIsShowHistory: Function;
  setIsViewCustomer: Function;
  setIsDisableDetails: Function;
};

const List: React.FC<ListProps> = ({
  data,
  setArrItemSelected,
  setIsShowHistory,
  setIsViewCustomer,
  setIsDisableDetails,
  ...props
}) => {
  const { t } = useTranslation('giftcard');

  const selectedRowsRef = useRef<Giftcard[]>([]);

  const colActionsFormat = (cell: React.ReactNode, row: Giftcard) => {
    const onEdit = () => {
      props.onEdit(row.id);
    };

    const onDelete = () => {
      props.onDelete(row.id);
    };

    return (
      <>
        <Button
          type="button"
          size="sm"
          color="primary"
          className="mr-1"
          onClick={onEdit}
        >
          <i className="fa fa-edit" /> {t('giftcard:edit')}
        </Button>
        <Button type="button" size="sm" color="danger" onClick={onDelete}>
          <i className="fa fa-trash" /> {t('giftcard:delete')}
        </Button>
      </>
    );
  };

  const colActionsFormatPaid = (cell: React.ReactNode, row: Giftcard) => {
    const onHistory = () => {
      props.onHistory(row.id);
    };

    return (
      <>
        <Row>
          <Col className="m-0">
            <span className="mr-4">{row.value_use}</span>
          </Col>
          <Col>
            <Button
              type="button"
              size="sm"
              color="primary"
              onClick={onHistory}
            >
              <i className="fa fa-edit" /> {t('giftcard:giftcards_history_btn')}
            </Button>
          </Col>
        </Row>
      </>
    );
  };

  const colActionsCus = (cell: React.ReactNode, row: Giftcard) => {
    const onViewCustomer = () => {
      selectedRowsRef.current = [];
      props.onViewCustomer(row.id);
    };

    return (
      <>
        <Row>
          <Col className="m-0">
            <span className="mr-4">{row.user_id}</span>
          </Col>
          <Col>
            <Button
              type="button"
              size="sm"
              color="primary"
              onClick={onViewCustomer}
            >
              <i className="fa fa-edit" /> {t('giftcard:giftcards_view_customer')}
            </Button>
          </Col>
        </Row>
      </>
    );
  };

  const onSelect = (
    row: Giftcard,
    rowIndex: number,
    isSelected: boolean,
  ) => {
    if (isSelected) {
      selectedRowsRef.current.push(row);
    } else {
      const index = selectedRowsRef.current.findIndex(
        (item) => row.id === item.id
      );
      if (index >= 0) selectedRowsRef.current.splice(index);
    }

    setIsDisableDetails(selectedRowsRef.current.length === 0);
    setArrItemSelected(selectedRowsRef.current);
  };

  const onSelectAll = (
    rows: any[],
    isSelected: boolean,
  ) => {
    if (isSelected) {
      selectedRowsRef.current = rows;
    } else {
      selectedRowsRef.current.length = 0;
    }

    setIsDisableDetails(selectedRowsRef.current.length === 0);

  };

  const onPageChange = (page: number, sizePerPage: number) => {
    if (props.onPageChange) props.onPageChange(page, sizePerPage);
  };

  const onSizePerPageList = (sizePerPage: number) => {
    if (props.onSizePerPageList) props.onSizePerPageList(sizePerPage);
  };

  const onSortChange = (
    sortName: string | number | symbol,
    sortOrder: SortOrder
  ): void => {
    if (props.onSortChange) props.onSortChange(sortName, sortOrder);
  };

  return (
    <SearchResult
      title={t('employee:result')}
      data={data}
      bulkActions={Constants.BULK_ACTIONS}
      onBulkActions={props.onBulkActions}
      onSortChange={onSortChange}
      onSizePerPageList={onSizePerPageList}
      onPageChange={onPageChange}
      onSelect={onSelect}
      onSelectAll={onSelectAll}
    >
      <TableHeaderColumn isKey dataField="giftcard_number" dataSort>
        {t('giftcard:giftcards_giftcard_number')}
      </TableHeaderColumn>
      <TableHeaderColumn dataField="value" dataSort>
        {t('giftcard:giftcards_card_value')}
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="value_use"
        dataFormat={colActionsFormatPaid}
        dataSort
      >
        {t('giftcard:giftcards_card_paid_amount')}
      </TableHeaderColumn>
      <TableHeaderColumn dataField="balance" dataSort>
        {t('giftcard:giftcards_card__current_balance')}
      </TableHeaderColumn>
      <TableHeaderColumn dataField="user_id" dataSort dataFormat={colActionsCus}>
        {t('giftcard:giftcards_customer_name')}
      </TableHeaderColumn>
      <TableHeaderColumn dataField="effective_start" dataSort>
        {t('giftcard:giftcards_begin_dated')}
      </TableHeaderColumn>
      <TableHeaderColumn dataField="effective_end" dataSort>
        {t('giftcard:giftcards_end_dated')}
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="giftcards_bulk_edit"
        export={false}
        dataFormat={colActionsFormat}
      />
    </SearchResult>
  );
};

export default React.memo(List);
