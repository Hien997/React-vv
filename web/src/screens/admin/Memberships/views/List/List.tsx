import React, { useRef } from 'react';
import { Card, CardHeader, CardBody, Button, Col } from 'reactstrap';
import {
  BootstrapTable,
  TableHeaderColumn,
  SelectRow,
  Options,
  ToolBarProps,
} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import * as Constants from '../../constants';
import { Select } from '../../../../../components/common/form/select';
import { SortOrder } from '../../../../../state/api-models/common';
import { Membership } from '../../../../../state/models/membership';
import { formatCurrency } from './util';

const TABLE_OPTIONS = {
  sortIndicator: true,
  hideSizePerPage: false,
  sizePerPageList: [5, 10, 15, 20],
  sizePerPage: 5,
  paginationSize: 5,
  paginationShowsTotal: true,
  hidePageListOnlyOnePage: false,
  clearSearch: false,
  alwaysShowAllBtns: false,
  withFirstAndLast: false,
};

export type ListProps = {
  data: Membership[];
  bulkActions?: any;
  onBulkActions?: (action: string, rows: Membership[]) => void;
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
  onHistory: Function;
};

const List: React.FC<ListProps> = ({ data, ...props }) => {
  const { t } = useTranslation('membership');

  const selectedRowsRef = useRef<Membership[]>([]);

  const colActionsFormat = (cell: React.ReactNode, row: Membership) => {
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
          <i className="fa fa-edit" /> {t('edit')}
        </Button>
        <Button type="button" size="sm" color="danger" onClick={onDelete}>
          <i className="fa fa-trash" /> {t('delete')}
        </Button>
      </>
    );
  };

  const colStatus = (cell: React.ReactNode, row: Membership) => {
    return row.published ? t('disable') : t('enable');
  };

  const colCalculationPoint = (cell: React.ReactNode, row: Membership) => {
    return row.calculation_point ? t('enable') : t('disable');
  };

  const colCreatedAt = (cell: React.ReactNode, row: Membership) => {
    return moment(row.created_at).format('MM-DD-YYYY');
  };

  const colAmount = (cell: React.ReactNode, row: Membership) => {
    const onClickHistory = () => {
      props.onHistory(row);
    };

    return (
      <>
        <span>{formatCurrency(row.amount)}</span>
        <Button
          type="button"
          size="sm"
          color="info"
          className="mr-1"
          onClick={onClickHistory}
          style={{ marginLeft: '10px' }}
        >
          <i className="fa fa-history" /> {t('history')}
        </Button>
      </>
    );
  };

  const bulkActionRef = useRef('');

  const createToolBar = (toolbarProps: ToolBarProps) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      bulkActionRef.current = event.target.value;
    };

    const onApply = () => {
      if (props.onBulkActions && bulkActionRef.current) {
        props.onBulkActions(bulkActionRef.current, selectedRowsRef.current);
      }
    };

    const onDelete = () => {
      if (props.onBulkActions)
        props.onBulkActions('delete', selectedRowsRef.current);
    };

    return (
      <>
        <Col md={6} sm={6} xs={6}>
          <Select
            className="d-inline"
            style={{ maxWidth: 100 }}
            onChange={onChange}
            options={Constants.BULK_ACTIONS}
          />

          <Button
            type="button"
            size="md"
            color="primary"
            className="d-inline ml-2"
            onClick={onApply}
          >
            <i className="fa fa-check" /> {t('apply')}
          </Button>
        </Col>
        <Col className="text-right">
          <Button
            type="button"
            size="md"
            color="danger"
            className="d-inline"
            onClick={onDelete}
          >
            <i className="fa fa-trash" /> {t('delete')}
          </Button>
        </Col>
      </>
    );
  };

  const onSelect = (
    row: Membership,
    isSelected: boolean,
    event: any,
    rowIndex: number
  ): boolean | void => {
    if (isSelected) {
      selectedRowsRef.current.push(row);
    } else {
      const index = selectedRowsRef.current.findIndex(
        (item) => row.id === item.id
      );
      if (index >= 0) selectedRowsRef.current.splice(index, 1);
    }
    return true;
  };

  const onSelectAll = (
    isSelected: boolean,
    rows: Membership[]
  ): boolean | Array<number | string> => {
    if (isSelected) {
      selectedRowsRef.current = rows;
    } else {
      selectedRowsRef.current.length = 0;
    }
    return true;
  };

  const selectRowProp: SelectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    bgColor: 'rgb(238, 193, 213)',
    onSelect,
    onSelectAll,
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

  const tableOptions: Options = {
    ...TABLE_OPTIONS,
    toolBar: createToolBar,
    onPageChange,
    onSizePerPageList,
    onSortChange,
  };

  return (
    <div className="animated">
      <Card>
        <CardHeader>
          <i className="icon-menu" />
          {t('list')} <div className="card-header-bulkActions" />
        </CardHeader>
        <CardBody>
          <BootstrapTable
            // eslint-disable-next-line no-nested-ternary
            data={data}
            selectRow={selectRowProp}
            version="4"
            striped
            hover
            pagination
            insertRow
            deleteRow
            options={tableOptions}
          >
            <TableHeaderColumn isKey dataField="m_code" dataSort>
              {t('membership_code')}
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="amount"
              dataSort
              dataFormat={colAmount}
            >
              {t('amount')}
            </TableHeaderColumn>
            <TableHeaderColumn dataField="amount_type" dataSort>
              {t('amount_type')}
            </TableHeaderColumn>
            {/* TODO STATUS */}
            <TableHeaderColumn
              dataField="status"
              dataSort
              dataFormat={colStatus}
            >
              {t('status')}
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="calculation_point"
              dataSort
              dataFormat={colCalculationPoint}
            >
              {t('calculation_point')}
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="created_at"
              dataSort
              dataFormat={colCreatedAt}
            >
              {t('created_at')}
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="bulkActions"
              export={false}
              dataFormat={colActionsFormat}
            >
              {t('employee:bulk_actions')}
            </TableHeaderColumn>
          </BootstrapTable>
        </CardBody>
      </Card>
    </div>
  );
};

export default React.memo(List);
