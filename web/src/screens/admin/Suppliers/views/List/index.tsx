import { Supplier } from 'src/state/models/supplier';
import React, { useState } from 'react';
import DeleteConfirmation from './DeleteConfirmation';
import List, { ListProps } from './List';
import Toolbar, { ToolbarProps } from './Toolbar';
import Condition, { ConditionProps } from './Condition';

export type ListViewProps = ToolbarProps &
  ConditionProps &
  ListProps & {
    data: Supplier[];
  };

const ListView: React.FC<ListViewProps> = ({ data, pagination, ...props }) => {
  const [deleting, setDeleting] = useState(false);
  const [deletingID, setDeletingID] = useState(0);

  const onDeleting = (id: number) => {
    setDeleting(true);
    setDeletingID(id);
  };

  const onDeletingCancel = () => {
    setDeleting(false);
    setDeletingID(0);
  };

  const onDeletingConfirm = () => {
    props.onDelete(deletingID);

    setDeleting(false);
    setDeletingID(0);
  };

  return (
    <>
      <Toolbar onInsert={props.onInsert} onHelp={props.onHelp} />
      <Condition onClear={props.onClear} onSearch={props.onSearch} />
      <List
        data={data}
        pagination={pagination}
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
