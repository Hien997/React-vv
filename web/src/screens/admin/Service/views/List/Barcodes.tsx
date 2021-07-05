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
import { Service } from '../../../../../state/models/service';
import { BarCodeType } from '../../types';

type Props = {
    onCancel: Function;
    data: Service[];
    type: BarCodeType;
}

const Item = (row: Service & { type: BarCodeType }) => {
    const { inputRef } = useBarcode({
        value: row.sku,
        options: {
            displayValue: false
        }
    });
    return <Col className="barcode" xs={row.type === BarCodeType.Lable ? "12" : "6"} md={row.type === BarCodeType.Lable ? "12" : "6"} >
        <img ref={inputRef} />
        <br />
        <b>{row.name}: ${row.unit_price}</b>
    </Col>
};

const Condition: React.FC<Props> = ({ onCancel, data, type }) => {
    const { t } = useTranslation('service');

    const componentRef = useRef<any>();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const onHidden = () => {
        onCancel()
    }

    return <>
        <div className="animated">
            <Modal isOpen={true} size="xl">
                <ModalHeader>
                    <strong>
                        {t('service:barcode')}
                    </strong>
                </ModalHeader>
                <ModalBody>
                    <div ref={componentRef}>
                        <Row >
                            <Col xs="12" md="12" className="mb-4">
                                <Row>
                                    {
                                        data.map(item => {
                                            return <Item type={type} {...item} />
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
                        {t('service:print')}
                    </Button>
                    <Button
                        type="reset"
                        color="secondary"
                        className="mr-1"
                        onClick={onHidden}
                    >
                        {t('service:cancel')}
                    </Button>
                </ModalFooter>
            </Modal>

        </div>
    </>
}
export default React.memo(Condition)