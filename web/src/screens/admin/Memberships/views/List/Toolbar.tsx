import React from 'react';
import { Card, CardHeader, Button, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';

export type ToolbarProps = {
  onInsert?: any;
  onHelp?: any;
};

const Toolbar: React.FC<ToolbarProps> = ({ ...props }) => {
  const { t } = useTranslation('membership');

  return (
    <div className="animated">
      <Card>
        <CardHeader>
          <Row>
            <Col md="6" className="text-left">
              <Button
                type="button"
                size="lg"
                color="primary"
                onClick={props.onInsert}
              >
                <i className="fa fa-plus-square" /> {t('new_membership')}
              </Button>
            </Col>
            <Col md="6" className="text-right">
              <Button
                type="reset"
                size="lg"
                color="secondary"
                onClick={props.onHelp}
              >
                <i className="fa fa-question" /> {t('help')}
              </Button>
            </Col>
          </Row>
        </CardHeader>
      </Card>
    </div>
  );
};

export default React.memo(Toolbar);
