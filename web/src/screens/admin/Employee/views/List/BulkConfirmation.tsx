import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useTranslation } from 'react-i18next';

export type BulkConfirmationProps = {
  bulkAction: string;
  onOK: any;
  onCancel: any;
};

const BulkConfirmation: React.FC<BulkConfirmationProps> = ({ ...props }) => {
  const { t } = useTranslation('employee');

  return (
    <div className="animated">
      <Modal isOpen={true} size="md">
        <ModalHeader>
          <i className="fas fa-tasks" />
          <strong>{t(`employee:confirm_${props.bulkAction}_title`)}</strong>
        </ModalHeader>
        <ModalBody>{t(`employee:confirm_${props.bulkAction}_msg`)}</ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            color="danger"
            className="mr-1"
            onClick={props.onOK}
          >
            {t('employee:ok')}
          </Button>
          <Button
            type="reset"
            color="secondary"
            className="mr-1"
            onClick={props.onCancel}
          >
            {t('employee:cancel')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default BulkConfirmation;
