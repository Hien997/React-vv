import React, { useState } from 'react';
import { CustomerDisplay } from '../../../../../state/models/customer';
import Toolbar, { ToolbarProps } from './Toolbar';
import Condition, { ConditionProps } from './Condition';
import List, { ListProps } from './List';
import DeleteConfirmation from './DeleteConfirmation';
import { BULK_ACTIONS_API } from '../../constants';

export type ListViewProps = ToolbarProps & ConditionProps & ListProps;

const ListView: React.FC<ListViewProps> = ({ data, ...props }) => {
  const [deleting, setDeleting] = useState(false);
  const [deletingID, setDeletingID] = useState('');
  const [action, setAction] = useState<string>('');
  const [deletingRows, setDeletingRows] = useState<CustomerDisplay[]>([]);
  const onDeleting = (id: string) => {
    setDeleting(true);
    setDeletingID(id);
  };

  const onBulkActions = (action: string, data: any) => {
    if (action === BULK_ACTIONS_API.DeleteList) {
      setDeleting(true);
      setAction(action);
      setDeletingRows(data);
    } else {
      props.onBulkActions(action, data);
    }
  };

  const onDeletingCancel = () => {
    setDeleting(false);
    setDeletingID('');
    setAction('');
    setDeletingRows([]);
  };

  const onDeletingConfirm = () => {
    if (deletingID) {
      props.onDelete(deletingID);
    }

    if (action && deletingRows) {
      props.onBulkActions(action, deletingRows);
    }

    setDeleting(false);
    setDeletingID('');
    setAction('');
    setDeletingRows([]);
  };

  return (
    <>
      <Toolbar
        onInsert={props.onInsert}
        onImport={props.onBulkActions}
        onHelp={props.onHelp}
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
        onBulkActions={onBulkActions}
        onOpenCustomerHistoryPoint={props.onOpenCustomerHistoryPoint}
        onOpenCustomerReviewer={props.onOpenCustomerReviewer}
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
