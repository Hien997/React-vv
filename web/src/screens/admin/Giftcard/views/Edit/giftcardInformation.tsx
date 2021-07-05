import React from 'react';
import { Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import {
  FormGroupInputItem,
  FormGroupSelectInputItem,
  FormGroupInputItemCustom,
  FormGroupSelectCodeInputItem,
} from '../../../../../components/admin/Form/FormGroup';
import { Code } from '../../../../../config/code';

type Props = {
  id?: string;
  onBlurGiftcardNumber: Function;
  formikBag: any;
};

const GiftcardInformation: React.FC<Props> = ({ id, onBlurGiftcardNumber }) => {
  const { t } = useTranslation('giftcard');

  return (
    <>
      <Row>
        <Col className="m-0">
          <Row>
            <Col className="m-0">
              <FormGroupSelectCodeInputItem
                label={t('giftcard:giftcards_store_info')}
                name="store_id"
                codeName="stores"
              />
            </Col>
          </Row>

          <Row>
            <Col className="m-0">
              <FormGroupInputItemCustom
                label={`${t('giftcard:giftcards_number_information')}:(*)`}
                name="giftcard_number"
                handleBlur={onBlurGiftcardNumber}
              />
            </Col>
          </Row>

          <Row>
            <Col className="m-0">
              <FormGroupInputItem
                label={`${t('giftcard:giftcards_card_value')}:(*)`}
                name="value"
              />
            </Col>
          </Row>

          {id ? (
            <>
              <Row>
                <Col className="m-0">
                  <FormGroupInputItem
                    label={`${t('giftcard:giftcards_card_balance')}:(*)`}
                    name="value_use"
                  />
                </Col>
              </Row>
            </>
          ) : (
            <></>
          )}

          <Row>
            <Col className="m-0">
              <FormGroupSelectCodeInputItem
                label={`${t('giftcard:giftcards_customer_name')}:(*)`}
                name="user_id"
                codeName="users"
              />
            </Col>
          </Row>

          <Row>
            <Col className="m-0">
              <FormGroupInputItem
                label={`${t('giftcard:giftcards_begin_dated')}:(*)`}
                name="effective_start"
              />
            </Col>
          </Row>

          <Row>
            <Col className="m-0">
              <FormGroupInputItem
                label={`${t('giftcard:giftcards_end_dated')}:(*)`}
                name="effective_end"
              />
            </Col>
          </Row>

          <Row>
            <Col className="m-0">
              <FormGroupSelectInputItem
                label={`${t('giftcard:giftcards_published')}:(*)`}
                name="published"
                options={Code.Published}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(GiftcardInformation);
