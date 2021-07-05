import React from 'react';
import { TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';
import { Code } from 'src/config/code';
import { Employee } from '../../../../../state/models/employee';
import * as Constants from '../../constants';

import { SortOrder } from '../../../../../state/api-models/common';
import { SearchResult } from '../../../../../components/admin/search';

export type ListProps = {
  data: Employee[];
  bulkActions?: any;
  onBulkActions?: (action: string, rows: Employee[]) => void;
  onEdit?: (id: string) => void;
  onInsert?: VoidFunction;
  onImport?: VoidFunction;
  onDelete?: (id: string) => void;
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

const List: React.FC<ListProps> = ({ ...props }) => {
  const { t } = useTranslation('employee');

  const onEdit = (cell: React.ReactNode, row: Employee) => {
    if (props.onEdit) props.onEdit(row.id);
  };

  const onDelete = (cell: React.ReactNode, row: Employee) => {
    if (props.onDelete) props.onDelete(row.id);
  };

  const onBulkActions = (action: string, rows: Employee[]) => {
    if (props.onBulkActions) props.onBulkActions(action, rows);
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

  const colStatusFormat = (cell: React.ReactNode, row: any) => {
    const status = Code.Status.find(
      (item) => item.value === String(row.published)
    );
    return <>{status && status.label}</>;
  };

  const colActionsFormat = (cell: React.ReactNode, row: any) => {
    const handleEdit = () => {
      onEdit(cell, row);
    };

    const handleDelete = () => {
      onDelete(cell, row);
    };

    return (
      <>
        <Button
          type="button"
          size="sm"
          color="primary"
          className="mr-1"
          onClick={handleEdit}
        >
          <i className="fa fa-edit" /> {t('common-search:btn_edit')}
        </Button>

        <Button type="button" size="sm" color="danger" onClick={handleDelete}>
          <i className="fa fa-trash" /> {t('common-search:btn_delete')}
        </Button>
      </>
    );
  };

  return (
    <SearchResult
      title={t('employee:result')}
      data={props.data}
      bulkActions={Constants.BULK_ACTIONS}
      onBulkActions={onBulkActions}
      onSortChange={onSortChange}
      onSizePerPageList={onSizePerPageList}
      onPageChange={onPageChange}
    >
      <TableHeaderColumn dataField="full_name" dataSort>
        {t('employee:name')}
      </TableHeaderColumn>
      <TableHeaderColumn isKey dataField="email">
        {t('employee:email')}
      </TableHeaderColumn>
      {/* <TableHeaderColumn dataField="username" dataSort>
        {t('employee:username')}
      </TableHeaderColumn> */}
      {/* <TableHeaderColumn dataField="employee_contract" dataSort>
        {t('employee:employee_contract')}
      </TableHeaderColumn> */}
      <TableHeaderColumn dataField="employee_code" dataSort>
        {t('employee:employee_code')}
      </TableHeaderColumn>
      <TableHeaderColumn dataField="phone" dataSort>
        {t('employee:Phone')}
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="published"
        dataSort
        dataFormat={colStatusFormat}
      >
        {t('employee:status')}
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="result_actions"
        export={false}
        dataFormat={colActionsFormat}
      >
        {t('employee:result_actions')}
      </TableHeaderColumn>
    </SearchResult>
  );
};

export default List;
