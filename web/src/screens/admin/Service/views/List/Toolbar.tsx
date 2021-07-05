import React from 'react';
import { Card, CardHeader, Button, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';

export type ToolbarProps = {
  onInsert?: any;
  onHelp?: any;
  onImportExcel: Function;
};

const Toolbar: React.FC<ToolbarProps> = ({ ...props }) => {
  const { t } = useTranslation('service');

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
                className="mr-2"
              >
                <i className="fa fa-plus-square" /> {t('service:new_service')}
              </Button>

              <Button
                type="button"
                size="lg"
                color="info"
                className="mr-2"
                onClick={() => props.onImportExcel()}
              >
                <i className="fa fa-plus-square" /> {t('service:excel')}
              </Button>
            </Col>
            <Col md="6" className="text-right">
              <Button
                type="reset"
                size="lg"
                color="secondary"
                onClick={props.onHelp}
              >
                <i className="fa fa-question" /> {t('service:help')}
              </Button>
            </Col>
          </Row>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Toolbar;
