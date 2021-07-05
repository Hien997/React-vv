import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from 'reactstrap';
import moment from 'moment';
import { Membership } from '../../../../../state/models/membership';
import { useMemoSelector } from 'src/hooks';
import { selectors } from '../../../../../state/ducks/membership';
import { formatCurrency } from '../List/util';
import { MembershipHistory } from '../../../../../state/api-models/membership';

export type MembershipHistoryProps = {
  onCancel: VoidFunction;
  item: Membership;
};

const HistoryContainer: React.FC<MembershipHistoryProps> = ({
  item,
  ...props
}) => {
  const { t } = useTranslation('membership');

  const historyMembership = useMemoSelector(selectors.getHistoryMembership)
    .response;

  const dataList = useMemo(() => {
    let ret: MembershipHistory[] = [];
    if (historyMembership && historyMembership.data) {
      ret = historyMembership.data.histories;
    }
    return ret;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [historyMembership]);

  return (
    <>
      <Modal isOpen={true} size="lg">
        <ModalHeader>
          <i className="icon-note" />
          <strong>{t('membership_history')}</strong>
        </ModalHeader>
        <ModalBody>
          <Col xs="12" md="12" className="mb-4">
            <Row>
              <Col xs="4" md="4" className="mb-4">
                {t('membership:membership_number')}
              </Col>
              <Col xs="8" md="8" className="mb-8">
                {item.m_code}
              </Col>
            </Row>
            <Row>
              <Col xs="4" md="4" className="mb-4">
                {t('membership:date_from')}
              </Col>
              <Col xs="8" md="8" className="mb-8">
                {moment(item.effective_start).format('MM-DD-YYYY')}
              </Col>
            </Row>
            <Row>
              <Col xs="4" md="4" className="mb-4">
                {t('membership:date_to')}
              </Col>
              <Col xs="8" md="8" className="mb-8">
                {moment(item.effective_end).format('MM-DD-YYYY')}
              </Col>
            </Row>
            <Row>
              <Col xs="4" md="4" className="mb-4">
                {t('membership:amount_label')}
              </Col>
              <Col xs="8" md="8" className="mb-8">
                {formatCurrency(item.amount)}
              </Col>
            </Row>
            <Col
              xs="12"
              md="12"
              className="mb-4"
              style={{ textAlign: 'center' }}
            >
              <b>{t('membership:membership_data_tracking')}</b>
            </Col>
            <Table className="table-striped">
              <thead>
                <tr>
                  <th scope="col">{t('membership:date')}</th>
                  <th scope="col">{t('membership:employee')}</th>
                  <th scope="col">{t('membership:amount_label')}</th>
                </tr>
              </thead>
              <tbody>
                {dataList.map((itemHis: MembershipHistory, index: number) => {
                  return (
                    <tr key={`membershipHis${index.toString()}`}>
                      <th style={{ fontWeight: 'normal' }}>
                        {moment(itemHis.created_at).format('MM-DD-YYYY')}
                      </th>
                      <td>{itemHis.employee}</td>
                      <td>{formatCurrency(itemHis.amount)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            {dataList.length === 0 && (
              <>
                <Col
                  xs="12"
                  md="12"
                  className="mb-4"
                  style={{ textAlign: 'center' }}
                >
                  {t('membership:history_no_records')}
                </Col>
              </>
            )}
          </Col>
        </ModalBody>
        <ModalFooter>
          <Button
            type="reset"
            color="secondary"
            className="mr-1"
            onClick={props.onCancel}
          >
            {t('cancel')}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default React.memo(HistoryContainer);
