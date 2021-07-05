import React from 'react';
import { Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { BaseToolbar } from '../../../../../components/admin/search/toolbar';

export type ToolbarProps = {
  onInsert?: any;
  onImport?: any;
  onHelp?: any;
};

const Toolbar: React.FC<ToolbarProps> = ({ ...props }) => {
  const { t } = useTranslation('employee');

  return (
    <BaseToolbar
      left={
        <Button type="reset" size="lg" color="secondary" onClick={props.onHelp}>
          <i className="fa fa-question" /> {t('employee:help')}
        </Button>
      }
      right={
        <>
          <Button
            type="button"
            size="lg"
            color="primary"
            className="mr-2"
            onClick={props.onImport}
          >
            <i className="fa fa-upload" aria-hidden="true" />
            {t('employee:import_employee')}
          </Button>
          <Button
            type="button"
            size="lg"
            color="primary"
            className="mr-2"
            onClick={props.onInsert}
          >
            <i className="fa fa-plus-square" /> {t('employee:add_new_employee')}
          </Button>
        </>
      }
    />
  );
};

export default Toolbar;
