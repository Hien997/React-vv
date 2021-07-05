import React, { useState } from 'react';
import { Giftcard } from '../../../../../state/models/giftcard';
import Toolbar, { ToolbarProps } from './Toolbar';
import Condition, { ConditionProps } from './Condition';
import List, { ListProps } from './List';
import DeleteConfirmation from './DeleteConfirmation';

export type ListViewProps = ToolbarProps &
  ConditionProps &
  ListProps & {
    data: Giftcard[];
  };

const ListView: React.FC<ListViewProps> = ({
  data,
  onShowBarCodes,
  setIsShowHistory,
  setIsViewCustomer,
  ...props
}) => {
  const [deleting, setDeleting] = useState(false);
  const [deletingID, setDeletingID] = useState('');


  const onDeleting = (id: string) => {
    setDeleting(true);
    setDeletingID(id);
  };

  const onDeletingCancel = () => {
    setDeleting(false);
    setDeletingID('');
  };

  const onDeletingConfirm = () => {
    props.onDelete(deletingID);

    setDeleting(false);
    setDeletingID('');
  };

  return (
    <>
      <Toolbar
        onInsert={props.onInsert}
        onHelp={props.onHelp}
        onBarcodeLabels={props.onBarcodeLabels}
        onBarcodeSheets={props.onBarcodeSheets}
        onShowBarCodes={onShowBarCodes}
        isDisableDetails={props.isDisableDetails}
      />
      <Condition onClear={props.onClear} onSearch={props.onSearch} />
      <List
        data={data}
        onInsert={props.onInsert}
        onEdit={props.onEdit}
        onDelete={onDeleting}
        onHistory={props.onHistory}
        onViewCustomer={props.onViewCustomer}
        setArrItemSelected={props.setArrItemSelected}
        arrItemSelected={props.arrItemSelected}
        setIsShowHistory={setIsShowHistory}
        setIsViewCustomer={setIsViewCustomer}
        onPageChange={props.onPageChange}
        onSizePerPageList={props.onSizePerPageList}
        onSortChange={props.onSortChange}
        onBulkActions={props.onBulkActions}
        setIsDisableDetails={props.setIsDisableDetails}
      />

      {deleting && (
        <DeleteConfirmation
          onCancel={onDeletingCancel}
          onOK={onDeletingConfirm}
        />
      )}
    </>
  );
};

export default React.memo(ListView);
