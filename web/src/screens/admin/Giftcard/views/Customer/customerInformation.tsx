import React from 'react';
import { Table } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { Giftcard } from '../../../../../state/models/giftcard';

type Props = {
  id?: string;
  data: Giftcard;
};

const CustomerInformation: React.FC<Props> = ({ id, data }) => {
  const { t } = useTranslation('giftcard');

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th scope="col"> {t('giftcard:giftcards_reprot_inv')}</th>
            <th scope="col"> {t('giftcard:giftcards_reprot_sale_id')}</th>
            <th scope="col"> {t('giftcard:giftcards_reprot_item_purchased')}</th>
            <th scope="col"> {t('giftcard:giftcards_reprot_sold_by')}</th>
            <th scope="col"> {t('giftcard:giftcards_reprot_sold_to')}</th>
            <th scope="col"> {t('giftcard:giftcards_reprot_sub_total')}</th>
            <th scope="col"> {t('giftcard:giftcards_reprot_discounts')}</th>
            <th scope="col"> {t('giftcard:giftcards_reprot_tax')}</th>
            <th scope="col"> {t('giftcard:giftcards_reprot_total')}</th>
            <th scope="col"> {t('giftcard:giftcards_reprot_profit')}</th>
            <th scope="col"> {t('giftcard:giftcards_reprot_payment_type')}</th>
            <th scope="col"> {t('giftcard:giftcards_reprot_comment')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default React.memo(CustomerInformation);
