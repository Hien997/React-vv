import React, { useState } from 'react';
import {
  Button,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
} from 'reactstrap';

import '../Edit/Edit.css';
import { useTranslation } from 'react-i18next';
import {
  BootstrapTable,
  TableHeaderColumn,
  Options,
} from 'react-bootstrap-table';
import { useMemoSelector } from 'src/hooks';
import { SortOrder } from '../../../../../state/api-models/common';
import { Customer } from '../../../../../state/models/customer';
import { customerSelectors } from '../../../../../state/ducks/customer';

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

export type ListHistoryPointProps = {
  data: Customer;
  onPageChange?: (page: number, sizePerPage: number) => void;
  onSizePerPageList?: (sizePerPage: number) => void;
  onSortChange?: (
    sortName: string | number | symbol,
    sortOrder: SortOrder
  ) => void;
  onCancel: any;
};

const CustomersHistoryPointView: React.FC<ListHistoryPointProps> = ({
  data,
  ...props
}) => {
  const { t } = useTranslation('customer');
  const dataReponse = useMemoSelector(customerSelectors.getHistoryPoint);

  const dataHistoryPoint =
    dataReponse &&
    dataReponse.response &&
    dataReponse.response.data &&
    dataReponse.response.data.customersHistoriesPoint;
  const paging =
    dataReponse &&
    dataReponse.response &&
    dataReponse.response.data &&
    dataReponse.response.data.pagination;

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
    ...TABLE_OPTIONS,
    onPageChange,
    onSizePerPageList,
    onSortChange,
    sizePerPageDropDown: renderSizePerPageDropDown,
    page: paging ? paging.page : 1,
    sizePerPage: paging ? paging.items_per_page : 5,
  };

  const onCancel = () => {
    props.onCancel();
  };

  return (
    <Modal isOpen={true} size="lg">
      <ModalHeader>
        <strong>{t('customers_historyPoint')}</strong>
      </ModalHeader>
      <ModalBody>
        <FormGroup row>
          <Col md="3">
            <Label>{t('customers_fullName')}</Label>
          </Col>
          <Col xs="12" md="9">
            <p className="form-control-static">
              {data && `${data.full_name}`}
            </p>
          </Col>
        </FormGroup>
        {dataHistoryPoint && dataHistoryPoint.length > 0 && (
          <BootstrapTable
            // eslint-disable-next-line no-nested-ternary
            data={dataHistoryPoint}
            version="4"
            striped
            hover
            pagination
            options={tableOptions}
            remote={true}
            fetchInfo={{ dataTotalSize: paging ? paging.total_items : 0 }}
          >
            <TableHeaderColumn dataField="func" dataSort>
              {t('customers_func')}
            </TableHeaderColumn>
            <TableHeaderColumn dataField="item_id" dataSort isKey={true}>
              {t('customers_service')}
            </TableHeaderColumn>
            <TableHeaderColumn dataField="action" dataSort>
              {t('customers_action')}
            </TableHeaderColumn>
            <TableHeaderColumn dataField="point" dataSort>
              {t('customers_point')}
            </TableHeaderColumn>
          </BootstrapTable>
        )}
      </ModalBody>
      <ModalFooter>
        <Button
          type="button"
          color="secondary"
          className="mr-1"
          onClick={onCancel}
        >
          {t('Cancel')}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default React.memo(CustomersHistoryPointView);
