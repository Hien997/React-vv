import React, { useState, useEffect } from 'react';
import { FormikConsumer } from 'formik';
// React DateRangePicker
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { useWindowSize } from '../../../config/hook';

import 'react-dates/lib/css/_datepicker.css';

export const FormikDateRangePicker = ({
  name,
  options,
  required = false,
  multiple = false,
  autoFocus = true,
  autoComplete = '',
  placeholder = '',
  className = '',
}) => {
  const [orientation, setOrientation] = useState('vertical');
  const [openDirection, setOpenDirection] = useState('down');
  const [date, setDate] = useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [focusedInput, setFocusedInput] = useState();
  const size = useWindowSize();

  useEffect(() => {
    const orientationNew = size.width < 620 ? 'vertical' : 'horizontal';
    const openDirectionNew = size.width < 620 ? 'up' : 'down';
    setOrientation(orientationNew);
    setOpenDirection(openDirectionNew);
  }, [size]);

  const onChange = (startDate, endDate) => {
    setDate({
      startDate,
      endDate,
    });
  };

  const onFocus = (input) => {
    setFocusedInput(input);
  };

  return (
    <FormikConsumer>
      {({
        values,
        initialValues,
        errors,
        touched,
        handleBlur,
        handleChange,
      }) => (
        <DateRangePicker
          name={name}
          className={className}
          startDate={date.startDate}
          startDateId={`startDate_${name}`}
          endDate={date.endDate}
          endDateId={`endDate_${name}`}
          onDatesChange={({ startDate, endDate }) => {
            onChange(startDate, endDate);
          }}
          focusedInput={focusedInput}
          onFocusChange={onFocus}
          orientation={orientation}
          openDirection={openDirection}
        />
      )}
    </FormikConsumer>
  );
};
