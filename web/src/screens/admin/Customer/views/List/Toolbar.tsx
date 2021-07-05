import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import ImportCustomers from './ImportData';
import { BaseToolbar } from '../../../../../components/admin/search/toolbar';

export type ToolbarProps = {
  onInsert?: any;
  onImport?: any;
  onHelp?: any;
};

const Toolbar: React.FC<ToolbarProps> = ({ ...props }) => {
  const { t } = useTranslation('customer');
  const [isShow, setShow] = useState(false);
  const [file, setFile] = useState<any>();

  const onShowImport = () => {
    setShow(true);
  };

  const onSave = () => {
    if (props.onImport && file) {
      props.onImport(file);
    }
  };

  return (
    <>
      <BaseToolbar
        left={
          <>
            <Button
              type="button"
              size="lg"
              color="primary"
              onClick={props.onInsert}
              className="d-inline"
            >
              <i className="fa fa-plus-square" />
              <span>{t('customers_new')}</span>
            </Button>
            <Button
              type="button"
              size="lg"
              color="primary"
              className="d-inline ml-2"
              onClick={onShowImport}
            >
              <i className="fa fa-plus-square" />
              <span>{t('customers_import')}</span>
            </Button>
          </>
        }
        right={
          <Button
            type="reset"
            size="lg"
            color="secondary"
            onClick={props.onHelp}
          >
            <i className="fa fa-question" />
            <span>{t('Help')}</span>
          </Button>
        }
      />
      {isShow && (
        <ImportCustomers setSave={onSave} setFile={setFile} setShow={setShow} />
      )}
    </>
  );
};

export default Toolbar;
