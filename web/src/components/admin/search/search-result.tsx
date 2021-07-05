import React, { useRef, useState } from 'react';
import { Card, CardBody, Button, Col } from 'reactstrap';
import {
  BootstrapTable,
  SelectRow,
  Options,
  ToolBarProps,
} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { useTranslation } from 'react-i18next';

import { Select } from '../../common/form/select';
import {
  SortOrder,
  PaginationResponse,
} from '../../../state/api-models/common';

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

export type SearchResultProps<T> = {
  title?: string;
  data: T[];
  options?: Options;
  remote?: boolean;
  paging?: PaginationResponse;
  bulkActions?: any;
  onBulkActions?: (action: string, rows: T[]) => void;
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
  onSelect?: (row: any, rowIndex: number, isSelected: boolean) => void;
  onSelectAll?: (rows: any[], isSelected: boolean) => void;
};

const SearchResult: React.FC<SearchResultProps<any>> = ({ ...props }) => {
  const { t } = useTranslation('common-search');

  const selectedRowsRef = useRef<any[]>([]);
  const [bulkAction, setBulkAction] = useState('');

  const bulkActionRef = useRef('');
  const createToolBar = (toolbarProps: ToolBarProps) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      bulkActionRef.current = event.target.value;
      setBulkAction(event.target.value);
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
          {props.bulkActions && (
            <>
              <Select
                className="d-inline"
                style={{ maxWidth: 100 }}
                value={bulkAction}
                onChange={onChange}
                options={props.bulkActions}
              />

              <Button
                type="button"
                size="md"
                color="primary"
                className="d-inline ml-2"
                onClick={onApply}
              >
                <i className="fa fa-check" /><span>{t('common-search:btn_apply')}</span>
              </Button>
            </>
          )}
        </Col>
        <Col className="text-right">
          <Button
            type="button"
            size="md"
            color="danger"
            className="d-inline"
            onClick={onDelete}
          >
            <i className="fa fa-trash" /><span>{t('common-search:btn_delete')}</span>
          </Button>
        </Col>
      </>
    );
  };

  const onSelect = (
    row: any,
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

    if (props.onSelect) {
      props.onSelect(row, rowIndex, isSelected);
    }
    return true;
  };

  const onSelectAll = (
    isSelected: boolean,
    rows: any[]
  ): boolean | Array<number | string> => {
    if (isSelected) {
      selectedRowsRef.current = rows;
    } else {
      selectedRowsRef.current.length = 0;
    }

    if (props.onSelectAll) {
      props.onSelectAll(rows, isSelected);
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
    ...props.options,
    toolBar: createToolBar,
    onPageChange,
    onSizePerPageList,
    onSortChange,
  };

  return (
    <Card>
      <CardBody>
        <BootstrapTable
          // eslint-disable-next-line no-nested-ternary
          data={props.data}
          selectRow={selectRowProp}
          version="4"
          striped
          hover
          pagination
          insertRow
          deleteRow
          options={tableOptions}
          remote={props.remote}
          fetchInfo={{
            dataTotalSize: props.paging
              ? props.paging.total_items
              : props.data.length,
          }}
        >
          {props.children}
        </BootstrapTable>
      </CardBody>
    </Card>
  );
};

export { SearchResult };
