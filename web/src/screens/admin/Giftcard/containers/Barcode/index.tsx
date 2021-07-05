import React, { useRef } from 'react';
import {
  Button,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { useReactToPrint } from 'react-to-print';
import { useTranslation } from 'react-i18next';
import { useBarcode } from '@createnextapp/react-barcode';
import { Giftcard } from '../../../../../state/models/giftcard';
import { BarCodeType } from '../../types';

export type Props = {
  onCancel: Function;
  data: Giftcard[];
  type: BarCodeType;
};

const Item = (row: Giftcard & { type: BarCodeType }) => {
  const { inputRef } = useBarcode({
    value: '111111111111',
    options: {
      displayValue: false
    }
  });
  return (
    <Col className="barcode" xs={row.type === BarCodeType.Lable ? '12' : '6'} md={row.type === BarCodeType.Lable ? '12' : '6'}>
      <img ref={inputRef} alt="" />
      <br />
      <b>{row.giftcard_number}: ${row.value}</b>
    </Col>
  );
};

const Condition: React.FC<Props> = ({ onCancel, data, type }) => {
  const { t } = useTranslation('giftcard');

  const componentRef = useRef<any>();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const onHidden = () => {
    onCancel();
  };

  return (
    <>
      <div className="animated">
        <Modal isOpen={true} size="xl">
          <ModalHeader>
            <strong>
              {t('giftcard:giftcard_barcode')}
            </strong>
          </ModalHeader>
          <ModalBody>
            <div ref={componentRef}>
              <Row>
                <Col xs="12" md="12" className="mb-4">
                  <Row>
                    {
                      data.map((item) => {
                        return (
                          <Item key={item.id} type={type} {...item} />
                        );
                      })
                    }
                  </Row>
                </Col>
              </Row>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              type="reset"
              color="primary"
              className="mr-1"
              onClick={handlePrint}
            >
              {t('giftcard:giftcards_print')}
            </Button>
            <Button
              type="reset"
              color="secondary"
              className="mr-1"
              onClick={onHidden}
            >
              {t('giftcard:giftcards_cancel')}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};
export default React.memo(Condition);