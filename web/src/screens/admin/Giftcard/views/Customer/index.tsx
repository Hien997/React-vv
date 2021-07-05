import React from 'react';
import {
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
} from 'reactstrap';

import './Customer.css';
import { useTranslation } from 'react-i18next';
import { Giftcard } from '../../../../../state/models/giftcard';
import CustomerInformation from './customerInformation';

export type HistoryViewProps = {
  data?: Giftcard;
  onCancel: any;
  id?: string;
};

const HistoryView: React.FC<HistoryViewProps> = ({
  data,
  ...props
}) => {
  const { t } = useTranslation('giftcard');

  const onCancel = () => {
    props.onCancel();
  };

  return (
    <div className="animated">
      <Modal isOpen={true} size="xl">
        <ModalHeader>
          <i className="icon-note" />
          <strong>
            {t('giftcard:giftcards_reprot_name')}
          </strong>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col xs="12" md="12" className="mb-12">
              {data && (
                <CustomerInformation
                  id={props.id}
                  data={data}
                />
              )}
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            type="reset"
            color="secondary"
            className="mr-1"
            onClick={onCancel}
          >
            {t('giftcard:cancel')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default React.memo(HistoryView);
