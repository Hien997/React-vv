import React, { useState } from 'react';
import {
    Button,
    Col,
    Form,
    Row,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { FormGroupInputItem } from '../../../../../components/admin/Form/FormGroup';

type Props = {}

const Options: React.FC<Props> = () => {
    const { t } = useTranslation('service');

    const onHidden = () => { }

    return <div className="animated">
        <Modal isOpen={true} size="lg">
            <ModalHeader>
                <strong>
                    {t('service:service_option')}
                </strong>
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col md="12" xs="12" className="m-0" >
                        <b>Item Information</b>
                        <br />
                        <Col md="10" xs="12" className="m-0">
                            <FormGroupInputItem
                                label={t('service:store_share')}
                                name="store_id"
                            />
                        </Col>
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button
                    type="reset"
                    color="secondary"
                    className="mr-1"
                    onClick={onHidden}
                >
                    {t('employee:cancel')}
                </Button>
            </ModalFooter>
        </Modal>

    </div>
}

export default React.memo(Options)