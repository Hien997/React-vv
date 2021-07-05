import React, { ReactElement } from 'react';
import { Card, CardHeader, Row, Col } from 'reactstrap';

export type ToolbarProps = {
  left?: ReactElement;
  right?: ReactElement;
};

export const BaseToolbar: React.FC<ToolbarProps> = ({ ...props }) => {
  return (
    <Card>
      <CardHeader>
        <Row>
          <Col md="6" className="text-left">
            {props.left}
          </Col>
          <Col md="6" className="text-right">
            {props.right}
          </Col>
        </Row>
      </CardHeader>
    </Card>
  );
};
