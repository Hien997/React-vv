import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Col,
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
import {
  CustomerDisplay,
  Customer,
} from '../../../../../state/models/customer';
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

export type ListReviewerProps = {
  data: Customer;
  onPageChange?: (page: number, sizePerPage: number) => void;
  onSizePerPageList?: (sizePerPage: number) => void;
  onSortChange?: (
    sortName: string | number | symbol,
    sortOrder: SortOrder
  ) => void;
  onCancel: any;
};

const CustomersReviewerView: React.FC<ListReviewerProps> = ({
  data,
  ...props
}) => {
  const { t } = useTranslation('customer');
  const dataReponse = useMemoSelector(customerSelectors.getReviews);
  const dataReview =
    dataReponse &&
    dataReponse.response &&
    dataReponse.response.data &&
    dataReponse.response.data.customersReviews;
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
        <strong>{t('customers_reviewer')}</strong>
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
        {dataReview && dataReview.length > 0 && (
          <BootstrapTable
            // eslint-disable-next-line no-nested-ternary
            data={dataReview}
            version="4"
            striped
            hover
            pagination
            options={tableOptions}
            remote={true}
            fetchInfo={{ dataTotalSize: paging ? paging.total_items : 0 }}
          >
            <TableHeaderColumn dataField="invoice_no" dataSort isKey={true}>
              {t('customers_order')}
            </TableHeaderColumn>
            <TableHeaderColumn dataField="store_name" dataSort>
              {t('customers_store')}
            </TableHeaderColumn>
            <TableHeaderColumn dataField="rating" dataSort>
              {t('customers_rating')}
            </TableHeaderColumn>
            <TableHeaderColumn dataField="comment" dataSort>
              {t('customers_comment')}
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

export default React.memo(CustomersReviewerView);
