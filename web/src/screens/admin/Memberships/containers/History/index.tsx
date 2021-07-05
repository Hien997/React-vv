import React from 'react';
import HistoryView, { MembershipHistoryProps } from '../../views/History';

export type HistoryProps = MembershipHistoryProps;

const HistoryContainer: React.FC<HistoryProps> = (props) => {
  return <HistoryView {...props} />;
};

export default React.memo(HistoryContainer);