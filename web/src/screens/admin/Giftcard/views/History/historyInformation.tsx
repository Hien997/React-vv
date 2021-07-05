import React from 'react';
import { Row, Col, Table } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { Giftcard } from '../../../../../state/models/giftcard';
import { Code } from '../../../../../config/code';
import { formatDateHis } from '../../containers/History/utils';

type Props = {
  id?: string;
  data: Giftcard;
};

const HistoryInformation: React.FC<Props> = ({ id, data }) => {
  const { t } = useTranslation('giftcard');

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th colSpan={2}> {t('giftcard:giftcards_item_info')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {t('giftcard:giftcards_giftcard')}{': '}</td>
            <td> {data?.giftcard_number}</td>
          </tr>

          <tr>
            <td> {t('giftcard:giftcards_date_from')}{': '}</td>
            <td> {data?.effective_start.substr(0, 10).replace(/-/g, '/')}</td>
          </tr>

          <tr>
            <td> {t('giftcard:giftcards_date_to')}{': '}</td>
            <td> {data?.effective_end.substr(0, 10).replace(/-/g, '/')}</td>
          </tr>

          <tr>
            <td> {t('giftcard:giftcards_amount')}{': '}</td>
            <td> {'$'}{data.value}</td>
          </tr>

          <tr>
            <td> {t('giftcard:giftcards_card_value_used')}{': '}</td>
            <td>  {'$'}{data.value_use}</td>
          </tr>
        </tbody>
      </Table>
      <Row>
        <Col className="m-0">
          <Row>
            <Col className="col-sm d-flex justify-content-center mb-4 font-weight-bold">
              {t('giftcard:giftcards_data_tracking')}
            </Col>
          </Row>
        </Col>
      </Row>

      <Table>
        <thead>
          <tr>
            <th scope="col"> {t('giftcard:giftcards_date')}</th>
            <th scope="col"> {t('giftcard:giftcards_employee')}</th>
            <th scope="col"> {t('giftcard:giftcards_customer')}</th>
            <th scope="col"> {t('giftcard:giftcards_status')}</th>
            <th scope="col"> {t('giftcard:giftcards_amount')}</th>
          </tr>
        </thead>
        <tbody>
          {data.giftcard_histories.map((item) => {
            return (
              <tr key={item.giftcard_id}>
                <td>{formatDateHis(item.updated_at)}</td>
                {/* TODO: get User Name here */}
                <td>{item.user_id}</td>
                {/* TODO: get customer here */}
                <td>{Code.User.filter(
                  (items: any) =>
                    data.user_id === items.value)[0].label}
                </td>
                <td>{item.action}</td>
                <td>{item.value}</td>
              </tr>
            );
          })}

        </tbody>
      </Table>
    </>
  );
};

export default React.memo(HistoryInformation);
