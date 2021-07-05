import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useTranslation } from 'react-i18next';

export type DeleteConfirmationProps = {
  onOK?: any;
  onCancel?: any;
};

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  ...props
}) => {
  const { t } = useTranslation('customer');

  return (
    <div className="animated">
      <Modal isOpen={true} size="sm">
        <ModalHeader>
          <i className="icon-trash" />
          <strong>{t('Delete')}</strong>
        </ModalHeader>
        <ModalBody>{t('customers_confirm_delete')}</ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            color="danger"
            className="mr-1"
            onClick={props.onOK}
          >
            {t('Delete')}
          </Button>
          <Button
            type="reset"
            color="secondary"
            className="mr-1"
            onClick={props.onCancel}
          >
            {t('Cancel')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default React.memo(DeleteConfirmation);
