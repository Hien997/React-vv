import React from 'react';
import classNames from 'classnames';
import { Col, Row } from 'reactstrap';

const COLOR_STYLE: React.CSSProperties = {
  width: '50px',
  height: '50px',
  fontSize: '24px',
  lineHeight: '50px',
  textAlign: 'center',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

export const ThemeColor = (props) => {
  const { bgcolor, selected, onClick } = props;
  const classes = classNames(bgcolor, 'theme-color w-75 rounded mb-3');

  const handleClick = () => {
    onClick(bgcolor);
  };

  return (
    <Col md="2" sm="4" xs="6" className="mb-4">
      <button
        onClick={handleClick}
        className={classes}
        style={COLOR_STYLE}
        type="button"
      >
        {selected && <i className="fa fa-check" />}
      </button>
    </Col>
  );
};

export type ColorPalettesProps = {
  palettes: string[];
  value?: string;
  onChange?: (value: string) => void;
};

export const ColorPalettes: React.FC<ColorPalettesProps> = ({
  palettes,
  value = '',
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = React.useState(value);

  const onClick = (bgcolor) => {
    setSelectedValue(bgcolor);

    if (onChange) {
      onChange(bgcolor);
    }
  };
  return (
    <Row>
      {palettes &&
        palettes.map((bgcolor) => (
          <ThemeColor
            key={bgcolor}
            bgcolor={bgcolor}
            selected={selectedValue === bgcolor}
            onClick={onClick}
          />
        ))}
    </Row>
  );
};
