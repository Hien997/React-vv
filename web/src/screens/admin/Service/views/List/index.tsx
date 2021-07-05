import React, { useState } from 'react';
import Toolbar, { ToolbarProps } from './Toolbar';
import Condition, { ConditionProps } from './Condition';
import List, { ListProps } from './List';
import DeleteConfirmation from './DeleteConfirmation';

export type ListViewProps = ToolbarProps &
  ConditionProps & ListProps

const ListView: React.FC<ListViewProps> = ({ data, ...props }) => {
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
        onImportExcel={props.onImportExcel} 
      />
      <Condition onClear={props.onClear} onSearch={props.onSearch} />
      <List
        data={data}
        onInsert={props.onInsert}
        onEdit={props.onEdit}
        onDelete={onDeleting}
        onPageChange={props.onPageChange}
        onSizePerPageList={props.onSizePerPageList}
        onSortChange={props.onSortChange}
        onBulkActions={props.onBulkActions}
        setArrItemSelected={props.setArrItemSelected}
        arrItemSelected={props.arrItemSelected}
        onShowBarCodes={props.onShowBarCodes}
        onShowOption={props.onShowOption}
        onImportExcel={props.onImportExcel}
        updateService={props.updateService}
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

export default ListView;
