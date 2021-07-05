import React, { useState, useMemo, useEffect } from 'react';
import { Row, Col, CardBody, Card } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useMemoSelector } from 'src/hooks';
import {
  FormGroupCheckboxItem,
  FormGroupInputItem,
  FormGroupSelectInputItem,
  FormGroupTextAreaItem,
} from '../../../../../components/admin/Form/FormGroup';
import { customersGroupSelectors } from '../../../../../state/ducks/customersGroup';
import { customerSelectors } from '../../../../../state/ducks/customer';
import PointBalanceComponent from './PointBalanceComponent';
import MemberShipComponent from './memberShipComponent';
import { Code } from '../../../../../config/code';
import UploadAvatar from './uploadAvatar';
import { getImageUrl } from '../../utils';

export type BasicInforProps = {
  setFile: Function;
};

const BasicInformation: React.FC<BasicInforProps> = ({ ...props }) => {
  const { t } = useTranslation('customer');
  const [isShow, setShow] = useState(false);
  const [avatarUp, setAvatar] = useState<any>();
  const dataGroup = useMemoSelector(
    customersGroupSelectors.getcustomersGroupListConvert
  );
  const responseDetail = useMemoSelector(customerSelectors.getCustomerDetails);
  const pointBalance =
    responseDetail && responseDetail.data && responseDetail.data.point_balance;

  const avatar = useMemo(() => {
    let ret;
    if (avatarUp) {
      ret = avatarUp;
    }
    return ret;
  }, [avatarUp]);

  useEffect(() => {
    if (
      responseDetail &&
      responseDetail.data &&
      responseDetail.data.avatar_image
    ) {
      setAvatar(getImageUrl('customers', responseDetail.data.id));
    }
  }, [responseDetail]);

  const providePhoneData = Code.ProviderPhone.find((data) => {
    return data.city == 'USA';
  });

  const ShowPoppupAvatar = () => {
    setShow(true);
  };

  return (
    <>
      <Row>
        <Col md="12" xs="12" className="m-0">
          <Row>
            <Col md="10" xs="10" className="m-0">
              <Row>
                <Col md="12" xs="12" className="m-0">
                  <MemberShipComponent />
                </Col>
              </Row>
              <Row className="d-flex align-items-center">
                <Col md="6" xs="6" className="m-0">
                  <PointBalanceComponent pointBalance={pointBalance || ''} />
                </Col>
                <Col md="6" xs="6" className="m-0">
                  <FormGroupCheckboxItem
                    label={t('customers_favorite')}
                    name="favorite"
                  />
                </Col>
              </Row>
              <Row>
                <Col md="4" xs="12" className="m-0">
                  <FormGroupInputItem
                    label={`${t('customers_fullName')}(*)`}
                    name="full_name"
                  />
                </Col>
                <Col md="4" xs="12" className="m-0">
                  <FormGroupInputItem label="Birthday" name="birthday" />
                </Col>

                <Col md="4" xs="12" className="m-0">
                  <FormGroupInputItem
                    label={t('customers_anniversary')}
                    name="anniversary"
                  />
                </Col>
              </Row>
            </Col>
            <Col md="2" className="m-0">
              <Card className="text-white bg-secondary text-center image-card">
                <CardBody>
                  <blockquote className="card-bodyquote imageAvatar">
                    {!avatar ? (
                      <i
                        className="fa fa-user-o icons iconAvatar d-block mt-1"
                        onClick={ShowPoppupAvatar}
                      />

                    ) : (
                        <img
                          src={avatar}
                          style={{ width: '100%', height: '100%' }}
                          className="rounded mx-auto d-block"
                          onClick={ShowPoppupAvatar}
                        />
                      )}
                    {isShow && (
                      <UploadAvatar
                        avatar={avatar}
                        setFile={props.setFile}
                        setAvatar={setAvatar}
                        setShow={setShow}
                      />
                    )}
                  </blockquote>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('customers_address')}
                name="address"
              />
            </Col>
            <Col md="3" xs="12" className="m-0">
              <FormGroupInputItem label={t('customers_city')} name="city" />
            </Col>
            <Col md="3" xs="12" className="m-0">
              <FormGroupInputItem label={t('customers_state')} name="state" />
            </Col>
            <Col md="2" xs="12" className="m-0">
              <FormGroupInputItem label={t('customers_zip')} name="zipcode" />
            </Col>
          </Row>
          <Row>
            <Col md="4" xs="12" className="m-0">
              <FormGroupSelectInputItem
                label={t('customers_providePhone')}
                name="providePhone"
                options={providePhoneData && providePhoneData.data}
              />
            </Col>

            <Col md="4" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('customers_cellPhone')}
                name="cellphone"
              />
            </Col>

            <Col md="4" xs="12" className="m-0">
              <FormGroupInputItem
                label={t('customers_homePhone')}
                name="homephone"
              />
            </Col>
          </Row>
          <Row>
            <Col md="6" xs="12" className="m-0">
              <FormGroupSelectInputItem
                label={t('customers_group')}
                name="group_id"
                options={dataGroup}
              />
            </Col>
            <Col md="6" xs="12" className="m-0">
              <FormGroupInputItem label={t('customers_email')} name="email" />
            </Col>
          </Row>

          <Row>
            <Col md="12" xs="12" className="m-0">
              <FormGroupTextAreaItem label={t('customers_note')} name="note" />
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="3">
          <Row>

          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BasicInformation;
