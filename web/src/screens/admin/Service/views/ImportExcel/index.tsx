import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import {
    Button,
    Col,
    Row,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

const regex = /^[\w,\s-]+\.xlsx$/

export type Props = {
    onCancel: Function,
    importExcel: Function,
    setIsSubmit: Function
}

const ImportExcel: React.FC<Props> = ({ onCancel, importExcel, setIsSubmit }) => {
    const { t } = useTranslation('service');

    const [fileName, setFileName] = useState('');

    const fileRef = useRef<any>();

    const selectFile = (e: any) => {
        const file: File = e.target.files[0]
        setFileName(file.name)
        if (regex.test(file.name)) {
            fileRef.current = file
        }
    }

    const uploadFile = () => {
        setIsSubmit(true)
        importExcel(fileRef.current)
    }

    const onCancelImport = () => {
        onCancel()
    }

    return <>
        <div className="animated">
            <Modal isOpen={true} size="lg">
                <ModalHeader>
                    <i className="icon-note" />
                    <strong>
                        {t('service:excel')}
                    </strong>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col xs="2" md="2" />
                        <Col xs="8" md="8">
                            <input id="file" type="file" onChange={selectFile} />
                            {fileName && (!regex.test(fileName) && <p style={{ color: 'red' }}> {t('service:errorImportExcel')}</p>)}
                        </Col>
                        <Col xs="2" md="2" />
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button
                        type="submit"
                        color="primary"
                        className="mr-1"
                        disabled={!fileName || !regex.test(fileName)}
                        onClick={uploadFile}
                    >
                        Save
                    </Button>
                    <Button
                        type="reset"
                        color="secondary"
                        className="mr-1"
                        onClick={onCancelImport}
                    >
                        {t('employee:cancel')}
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    </>
}
export default React.memo(ImportExcel)