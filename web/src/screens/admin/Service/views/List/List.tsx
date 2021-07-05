import React, { useRef } from 'react';
import { Card, CardHeader, CardBody, Button, Col, Input } from 'reactstrap';
import {
  BootstrapTable,
  TableHeaderColumn,
  SelectRow,
  Options,
  ToolBarProps,
} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { useTranslation } from 'react-i18next';
import { Service } from '../../../../../state/models/service';
import * as Constants from '../../constants';
import { Select } from '../../../../../components/common/form/select';
import { SortOrder } from '../../../../../state/api-models/common';
import { BarCodeType } from '../../types';

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
  data: Service[];
  bulkActions?: any;
  onBulkActions?: (action: string, rows: Service[]) => void;
  onEdit: (id: string) => void;
  onInsert: VoidFunction;
  onDelete: (id: string) => void;
  onPageChange?: (page: number, sizePerPage: number) => void;
  onSizePerPageList?: (sizePerPage: number) => void;
  onSortChange?: (
    sortName: string | number | symbol,
    sortOrder: SortOrder
  ) => void;
  setArrItemSelected: Function;
  arrItemSelected: Service[];
  onShowBarCodes: Function;
  onShowOption: Function;
  onImportExcel: Function;
  updateService: Function;
};

const List: React.FC<ListProps> = ({
  data,
  setArrItemSelected,
  arrItemSelected,
  onShowBarCodes,
  onShowOption,
  ...props
}) => {
  const { t } = useTranslation('service');

  const selectedRowsRef = useRef<Service[]>([]);

  const colActionsFormat = (cell: React.ReactNode, row: Service) => {
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
          <i className="fa fa-edit" /> {t('service:edit')}
        </Button>
        <Button type="button" size="sm" color="danger" onClick={onDelete}>
          <i className="fa fa-trash" /> {t('service:delete')}
        </Button>
      </>
    );
  };

  const formatCurrency = (amt: string | number) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    const supplyPrice = formatter.format(Number(amt));

    return supplyPrice;
  };

  const colOption = (cell: React.ReactNode, row: Service) => {
    const onSelect = () => {
      onShowOption(row);
    };
    return (
      <>
        <span onClick={onSelect} style={{ display: 'inline' }}>
          [color]
        </span>
        <div className="btn-color" style={{ background: `${row.bg_color}` }}>
          <b>B</b>
        </div>
        <div className="btn-color" style={{ background: `${row.font_color}` }}>
          <b>F</b>
        </div>
      </>
    );
  };

  const colActiveNum = (cell: React.ReactNode, row: Service) => {
    return row.number_turn
      ? `${row.number_turn}T.(${row.short_name})`
      : `(${row.short_name})`;
  };

  const colSupplyPrice = (cell: React.ReactNode, row: Service) => {
    return formatCurrency(row.supply_price);
  };

  const colUnitPrice = (cell: React.ReactNode, row: Service) => {
    return formatCurrency(row.unit_price);
  };

  const colDeductibleAmt = (cell: React.ReactNode, row: Service) => {
    return formatCurrency(row.deductible_amount);
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

    const onShowBarCode = (type: BarCodeType) => {
      onShowBarCodes(type);
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
            <i className="fa fa-check" /> {t('service:apply')}
          </Button>
        </Col>
        <Col className="text-right">
          {arrItemSelected.length > 0 && (
            <>
              <Button
                type="button"
                size="md"
                color="success"
                className="d-inline"
                onClick={() => onShowBarCode(BarCodeType.Lable)}
              >
                <i className="fa fa-plus-square" /> {t('service:barcodeLabels')}
              </Button>
              <Button
                type="button"
                size="md"
                color="success"
                className="d-inline"
                onClick={() => onShowBarCode(BarCodeType.Sheet)}
              >
                <i className="fa fa-plus-square" /> {t('service:barcodeSheet')}
              </Button>
            </>
          )}

          <Button
            type="button"
            size="md"
            color="danger"
            className="d-inline"
            onClick={onDelete}
          >
            <i className="fa fa-trash" /> {t('service:delete')}
          </Button>
        </Col>
      </>
    );
  };

  const onSelect = (
    row: Service,
    isSelected: boolean,
    event: any,
    rowIndex: number
  ): boolean | void => {
    onSelectItem(row, isSelected);
    return true;
  };

  const onSelectItem = async (row: Service, isSelected: boolean) => {
    const itemSelected: Service[] = [...arrItemSelected];

    if (isSelected) {
      itemSelected.push(row);
      await setArrItemSelected(itemSelected);
      selectedRowsRef.current.push(row);
    } else {
      const index = selectedRowsRef.current.findIndex(
        (item) => row.id === item.id
      );
      if (index >= 0) {
        selectedRowsRef.current.splice(index, 1);
        itemSelected.splice(index, 1);
        await setArrItemSelected(itemSelected);
      }
    }
  };

  const onSelectAll = (
    isSelected: boolean,
    rows: Service[]
  ): boolean | Array<number | string> => {
    if (isSelected) {
      selectedRowsRef.current = rows;
      setArrItemSelected(rows);
    } else {
      selectedRowsRef.current.length = 0;
      setArrItemSelected([]);
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

  const colOrdering = (cell: React.ReactNode, row: Service) => {
    const regexNumber = /^[0-9]+$/;

    const onblur = (event: React.FocusEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (
        value &&
        regexNumber.test(value) &&
        value !== row.ordering.toString()
      ) {
        props.updateService({
          id: row.id,
          ordering: value,
        });
      }
    };
    return (
      <Input
        type="text"
        onBlur={onblur}
        defaultValue={row.ordering}
        style={{ textAlign: 'right' }}
      />
    );
  };

  return (
    <div className="animated">
      <Card>
        <CardHeader>
          <i className="icon-menu" />
          {t('service:list')} <div className="card-header-bulkActions" />
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
            <TableHeaderColumn dataField="sku" dataSort>
              {t('service:code')}
            </TableHeaderColumn>
            <TableHeaderColumn isKey dataField="name" dataSort>
              {t('service:item_name')}
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="number_turn"
              dataFormat={colActiveNum}
              dataSort
            >
              {t('service:active_turns')}
            </TableHeaderColumn>
            <TableHeaderColumn dataField="category_id" dataSort>
              {t('service:category')}
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="supply_price"
              dataFormat={colSupplyPrice}
              dataSort
              dataAlign="right"
            >
              {t('service:supply_cost')}
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="unit_price"
              dataSort
              dataFormat={colUnitPrice}
              dataAlign="right"
            >
              {t('service:unit_price')}
            </TableHeaderColumn>
            {/* TODO */}
            <TableHeaderColumn dataField="tax_percent" dataSort>
              {t('service:tax_percent')}
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="deductible_amount"
              dataFormat={colDeductibleAmt}
              dataSort
              dataAlign="right"
            >
              {t('service:deduction_comm')}
            </TableHeaderColumn>
            {/* TODO */}
            <TableHeaderColumn dataField="quantity" dataSort>
              {t('service:quantity')}
            </TableHeaderColumn>
            {/* TODO */}
            <TableHeaderColumn
              dataField="option"
              export={false}
              dataFormat={colOption}
            >
              {t('service:option')}
            </TableHeaderColumn>
            <TableHeaderColumn dataField="ordering" dataFormat={colOrdering}>
              {t('service:ordering')}
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="bulkActions"
              export={false}
              dataFormat={colActionsFormat}
            >
              {t('service:bulk_actions')}
            </TableHeaderColumn>
          </BootstrapTable>
        </CardBody>
      </Card>
    </div>
  );
};

export default List;
