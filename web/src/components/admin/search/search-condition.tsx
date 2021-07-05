import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Collapse,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';

export type SearchConditionProps = {
  title?: string;
  basicCondition: React.ReactElement;
  advancedCondition?: React.ReactElement;
  onSearch: Function;
  onClear: Function;
};

const SearchCondition: React.FC<SearchConditionProps> = ({ ...props }) => {
  const { t } = useTranslation('common-search');

  const [collapseConditions, setCollapseConditions] = useState(false);

  const toggleCondtions = () => {
    setCollapseConditions((prev) => !prev);
  };

  const onSearch = () => {
    if (props.onSearch) props.onSearch();
  };

  const onClear = () => {
    if (props.onClear) props.onClear();
  };

  return (
    <Card>
      <CardHeader>
        <i className="fa fa-filter" />
        {props.title || t('common-search:condition_title')}{' '}
        <div className="card-header-actions" />
        <div className="card-header-actions">
          {props.advancedCondition && (
            <Button
              color="link"
              className="card-header-action btn-minimize"
              data-target="#collapseCondtions"
              onClick={toggleCondtions}
            >
              {collapseConditions ? (
                <i className="icon-arrow-up" />
              ) : (
                  <i className="icon-arrow-down" />
                )}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardBody>
        {props.basicCondition}
        {props.advancedCondition && (
          <Collapse isOpen={collapseConditions} id="collapseCondtions">
            {props.advancedCondition}
          </Collapse>
        )}
      </CardBody>
      <CardFooter className="text-center">
        <Button
          type="button"
          size="lg"
          color="primary"
          className="mx-2"
          onClick={onSearch}
        >
          <i className="fa fa-search" /><span>{t('common-search:btn_search')}</span>
        </Button>
        <Button
          type="button"
          size="lg"
          color="secondary"
          className="mx-2"
          onClick={onClear}
        >
          <i className="fa fa-close" /><span>{t('common-search:btn_reset')}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { SearchCondition };
