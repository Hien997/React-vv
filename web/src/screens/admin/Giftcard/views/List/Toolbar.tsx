import React from 'react';
import { Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { BaseToolbar } from '../../../../../components/admin/search/toolbar';
import { BarCodeType } from '../../types';

export type ToolbarProps = {
  onInsert?: any;
  onHelp?: any;
  onBarcodeLabels?: any;
  onBarcodeSheets?: any;
  isDisableDetails: boolean;
  onShowBarCodes?: any;
};

const Toolbar: React.FC<ToolbarProps> = ({ ...props }) => {
  const { t } = useTranslation('giftcard');

  const onShowBarCode = (type: BarCodeType) => {
    props.onShowBarCodes(type);
  };

  return (
    <BaseToolbar
      left={
        <>
          <Button
            type="button"
            size="lg"
            color="primary"
            onClick={props.onInsert}
            className="mr-2"
          >
            <i className="fa fa-plus-square" /> {t('giftcard:giftcards_new')}
          </Button>

          <Button
            type="button"
            size="lg"
            color="primary"
            onClick={() => onShowBarCode(BarCodeType.Lable)}
            disabled={props.isDisableDetails}
            className="mr-2"
          >
            <i className="fa fa-plus-square" />{' '}
            {t('giftcard:giftcards_barcode_labels')}
          </Button>

          <Button
            type="button"
            size="lg"
            color="primary"
            onClick={() => onShowBarCode(BarCodeType.Sheet)}
            disabled={props.isDisableDetails}
            className="mr-2"
          >
            <i className="fa fa-plus-square" />{' '}
            {t('giftcard:giftcards_barcode_sheet')}
          </Button>
        </>
      }
      right={
        <Button type="reset" size="lg" color="secondary" onClick={props.onHelp}>
          <i className="fa fa-question" /> {t('employee:help')}
        </Button>
      }
    />
  );
};

export default React.memo(Toolbar);
