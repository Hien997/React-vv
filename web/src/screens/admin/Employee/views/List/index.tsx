import React, { useState } from 'react';
import { Employee } from '../../../../../state/models/employee';
import Toolbar, { ToolbarProps } from './Toolbar';
import Condition, { ConditionProps } from './Condition';
import List, { ListProps } from './List';
import DeleteConfirmation from './DeleteConfirmation';

export type ListViewProps = ToolbarProps &
  ConditionProps &
  ListProps & {
    data: Employee[];
  };

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
    if (props.onDelete) props.onDelete(deletingID);

    setDeleting(false);
    setDeletingID('');
  };

  return (
    <>
      <Toolbar
        onInsert={props.onInsert}
        onHelp={props.onHelp}
        onImport={props.onImport}
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
