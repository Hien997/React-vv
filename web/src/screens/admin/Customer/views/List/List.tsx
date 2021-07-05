import React, { useRef, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Col,
  NavLink,
  NavItem,
  Nav,
} from 'reactstrap';
import {
  BootstrapTable,
  TableHeaderColumn,
  SelectRow,
  Options,
  ToolBarProps,
  SizePerPageDropDown,
} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { useTranslation } from 'react-i18next';
import { CustomerDisplay } from '../../../../../state/models/customer';
import * as Constants from '../../constants';
import { Select } from '../../../../../components/common/form/select';
import { SortOrder } from '../../../../../state/api-models/common';
import './Edit.css';
import { customerSelectors } from '../../../../../state/ducks/customer';
import { useMemoSelector } from 'src/hooks';
import { SearchResult } from '../../../../../components/admin/search';

const TABLE_OPTIONS = {
  sortIndicator: true,
  hideSizePerPage: false,
  sizePerPageList: [5, 10, 15, 20],
  sizePerPage: 5,
  paginationSize: 5,
  paginationShowsTotal: true,
  hidePageListOnlyOnePage: false,
  clearSearch: false,
  alwaysShowAllBtns: true,
  withFirstAndLast: true,
};

export type ListProps = {
  data: CustomerDisplay[];
  bulkActions?: any;
  onBulkActions?: (action: string, row: any) => void;
  onOpenCustomerHistoryPoint: (id: string) => void;
  onOpenCustomerReviewer: (id: string) => void;
  onEdit: (id: string) => void;
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
};

const List: React.FC<ListProps> = ({ data, ...props }) => {
  const { t } = useTranslation('customer');
  const dataReponse = useMemoSelector(customerSelectors.getCustomerList);
  const paging = dataReponse && dataReponse.data && dataReponse.data.pagination;

  const colActionsFormat = (cell: React.ReactNode, row: CustomerDisplay) => {
    const onEdit = () => {
      props.onEdit(row.id);
    };

    const onDelete = () => {
      props.onDelete(row.id);
    };
    const onOpenReviewer = () => {
      props.onOpenCustomerReviewer(row.id);
    };

    return (
      <div className="buttonGrid">
        <Button
          type="button"
          size="sm"
          color="primary"
          className="btnItems"
          onClick={onEdit}
        >
          <i className="fa fa-edit" /><span>{t('customer_edit')}</span>
        </Button>
        <Button
          type="button"
          size="sm"
          className="btnItems"
          color="danger"
          onClick={onDelete}
        >
          <i className="fa fa-trash" /><span>{t('customer_delete')}</span>
        </Button>
        <Button
          type="button"
          size="sm"
          className="btnItems"
          color="primary"
          onClick={onOpenReviewer}
        >
          <i className="fa fa-search" /><span>{t('customers_reviewer')}</span>
        </Button>
      </div>
    );
  };

  const colPointFormart = (cell: React.ReactNode, row: CustomerDisplay) => {
    const onClickPoint = () => {
      props.onOpenCustomerHistoryPoint(row.id);
    };
    return (
      <NavLink onClick={onClickPoint} href="#">
        {row.point_balance}
      </NavLink>
    );
  };

  const onPageChange = (page: number, sizePerPage: number) => {
    if (props.onPageChange) props.onPageChange(page, sizePerPage);
  };

  const onSizePerPageList = (sizePerPage: number) => {
    if (props.onSizePerPageList) props.onSizePerPageList(sizePerPage);
  };

  const onBulkActions = (action: string, rows: CustomerDisplay[]) => {
    if (props.onBulkActions) props.onBulkActions(action, rows);
  };

  const onSortChange = (
    sortName: string | number | symbol,
    sortOrder: SortOrder
  ): void => {
    if (sortName === 'fullName') sortName = 'full_name';
    if (sortName === 'groupName') sortName = 'group_id';

    if (props.onSortChange) props.onSortChange(sortName, sortOrder);
  };

  const renderSizePerPageDropDown = (props: any) => {
    return (
      <div className="btn-group btnPerSize">
        {(props.sizePerPageList as string[]).map((n, idx) => {
          const isActive =
            String(n) === props.currSizePerPage ? 'active' : null;
          return (
            <button
              key={idx}
              type="button"
              className={`btn btn-info ${isActive}`}
              onClick={() => props.changeSizePerPage(n)}
            >
              {n}
            </button>
          );
        })}
      </div>
    );
  };

  const tableOptions: Options = {
    sizePerPageDropDown: renderSizePerPageDropDown,
    page: paging ? paging.page : 1,
    sizePerPage: paging ? paging.items_per_page : 5,
  };

  return (
    <SearchResult
      title={t('customer_list')}
      data={data}
      bulkActions={Constants.BULK_ACTIONS}
      onBulkActions={onBulkActions}
      onSortChange={onSortChange}
      onSizePerPageList={onSizePerPageList}
      onPageChange={onPageChange}
      remote={true}
      paging={paging}
      options={tableOptions}
    >
      <TableHeaderColumn
        dataField="full_name"
        dataSort
        columnClassName="columnVertical"
      >
        {t('customers_fullName')}
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="groupName"
        dataSort
        columnClassName="columnVertical"
      >
        {t('customers_group')}
      </TableHeaderColumn>
      <TableHeaderColumn
        isKey
        dataField="email"
        columnClassName="columnVertical"
      >
        {t('customers_email')}
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="address"
        dataSort
        columnClassName="columnVertical"
      >
        {t('customers_address')}
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="birthday"
        width="10%"
        dataSort
        columnClassName="columnVertical"
      >
        {t('customers_birthday')}
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="anniversary"
        dataSort
        columnClassName="columnVertical"
      >
        {t('customers_anniversary')}
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="cellphone"
        dataSort
        columnClassName="columnVertical"
      >
        {t('customers_cellPhone')}
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="membership_number"
        dataSort
        columnClassName="columnVertical"
      >
        {t('customers_membershipNumber')}
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="point_balance"
        width="5%"
        dataFormat={colPointFormart}
        columnClassName="columnVertical"
      >
        {t('customers_pointBalance')}
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="bulkActions"
        export={false}
        dataFormat={colActionsFormat}
      >
        {t('customers_action')}
      </TableHeaderColumn>
    </SearchResult>
  );
};

export default List;
