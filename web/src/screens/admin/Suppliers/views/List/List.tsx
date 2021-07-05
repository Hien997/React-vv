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
import * as Constants from 'src/screens/admin/Suppliers/constants';
import { Select } from 'src/components/common/form/select';
import { SortOrder, PaginationResponse } from 'src/state/api-models/common';
import { Supplier } from 'src/state/models/supplier';

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
  data: Supplier[];
  pagination?: PaginationResponse;
  bulkActions?: any;
  onBulkActions?: (action: string, rows: Supplier[]) => void;
  onEdit: (id: number) => void;
  onInsert: VoidFunction;
  onDelete: (id: number) => void;
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
  const { t } = useTranslation('supplier');

  const selectedRowsRef = useRef<Supplier[]>([]);

  const colActionsFormat = (cell: React.ReactNode, row: Supplier) => {
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
    row: Supplier,
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
      if (index >= 0) selectedRowsRef.current.splice(index);
    }
    return true;
  };

  const onSelectAll = (
    isSelected: boolean,
    rows: Supplier[]
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
            data={data}
            selectRow={selectRowProp}
            version="4"
            striped
            hover
            pagination
            insertRow
            deleteRow
            options={tableOptions}
            keyField="id"
          >
            <TableHeaderColumn dataField="company_name" dataSort>
              {t('company_name')}
            </TableHeaderColumn>
            <TableHeaderColumn dataField="email">
              {t('email')}
            </TableHeaderColumn>
            <TableHeaderColumn dataField="telephone" dataSort>
              {t('telephone')}
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="bulkActions"
              export={false}
              dataFormat={colActionsFormat}
            >
              {t('bulk_actions')}
            </TableHeaderColumn>
          </BootstrapTable>
        </CardBody>
      </Card>
    </div>
  );
};

export default List;
