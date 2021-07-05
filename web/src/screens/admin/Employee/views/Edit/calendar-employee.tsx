import React from 'react';
import {
  FormGroup,
  Label,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { Code } from 'src/config/code';
import { Employee } from '../../../../../state/models/employee';
import {
  FormikSelectInput,
  FormikErrorMessage,
  FormikInput,
} from '../../../../../components/common/Formik';

export type EmployeeEditViewProps = {
  data: Employee;
  onSubmit?: any;
  validate?: any;
};

type DayOfWeek = '0' | '1' | '2' | '3' | '4' | '5' | '6';

const getTextualDayOfWeek = (day: DayOfWeek) => {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return weekdays[parseInt(day.toString())];
};

type DayWorkingTimeProps = {
  day: DayOfWeek;
};

const DayWorkingTime: React.FC<DayWorkingTimeProps> = ({ day }) => {
  const textualDay = getTextualDayOfWeek(day);
  return (
    <FormGroup row>
      <Col md="2" xm="10">
        <Label className="font-weight-bold">{textualDay}</Label>
      </Col>

      <Col md="4" xm="10">
        <Row>
          <Label
            className="col-md-4"
            style={{ textAlign: 'right' }}
            for={`calendars[${day}].start_hour`}
          >
            from:
          </Label>

          <FormikSelectInput
            name={`calendars[${day}].start_hour`}
            id={`calendars[${day}].start_hour`}
            options={Code.WorkingTime.Start}
            className="col-md-8"
          />
          <FormikErrorMessage name={`calendars[${day}].start_hour`} />
        </Row>
      </Col>

      <Col md="4" xm="10">
        <Row>
          <Label
            className="col-md-4"
            style={{ textAlign: 'right' }}
            for={`calendars[${day}].end_hour`}
          >
            to:
          </Label>
          <FormikSelectInput
            name={`calendars[${day}].end_hour`}
            id={`calendars[${day}].end_hour`}
            options={Code.WorkingTime.End}
            className="col-md-8"
          />
          <FormikErrorMessage name={`calendars[${day}].end_hour`} />
        </Row>
      </Col>
    </FormGroup>
  );
};

const CalendarEmployee = () => {
  const { t } = useTranslation('employee');

  return (
    <>
      <Row>
        <Col md="8" sm="12">
          <Card>
            <CardHeader>{t('Option employee(s)')}</CardHeader>
            <CardBody>
              <DayWorkingTime day="0" />
              <DayWorkingTime day="1" />
              <DayWorkingTime day="2" />
              <DayWorkingTime day="3" />
              <DayWorkingTime day="4" />
              <DayWorkingTime day="5" />
              <DayWorkingTime day="6" />
            </CardBody>
          </Card>
        </Col>
        <Col md="4" sm="12">
          <Card>
            <CardHeader>{t('Option Append Employee')}</CardHeader>

            <CardBody>
              <FormGroup>
                <Label for="finish_time">Finish time:</Label>

                <FormikInput
                  name="employee.finish_time"
                  id="finish_time"
                  type="number"
                />
                <FormikErrorMessage name="employee.finish_time" />
              </FormGroup>
              <FormGroup>
                <Label for="red_time">Red time:</Label>

                <FormikInput
                  name="employee.red_time"
                  id="red_time"
                  type="number"
                />
                <Label>by minutes(ex: 10)</Label>
                <FormikErrorMessage name="employee.ed_time" />
              </FormGroup>
              <FormGroup>
                <Label for="yellow_time">Yellow time:</Label>

                <FormikInput
                  name="employee.yellow_time"
                  id="yellow_time"
                  type="number"
                />
                <FormikErrorMessage name="employee.yellow_time" />
              </FormGroup>
              <FormGroup>
                <Label for="delay_time">Delay time:</Label>

                <FormikInput
                  name="employee.delay_time"
                  id="delay_time"
                  type="number"
                />
                <FormikErrorMessage name="employee.delay_time" />
              </FormGroup>
            </CardBody>
          </Card>

          {/* <Card>
            <CardHeader>{t('Account Google Employee')}</CardHeader>
            <CardBody>
              <FormGroup>
                <Label for="google_calendar_id">Google Calendar ID:</Label>

                <FormikInput
                  name="google_calendar_id"
                  id="google_calendar_id"
                />
                <FormikErrorMessage name="google_calendar_id" />
              </FormGroup>
              <FormGroup>
                <Label for="google_calendar_user">Google Calendar User:</Label>

                <FormikInput
                  name="google_calendar_user"
                  id="google_calendar_user"
                />
                <FormikErrorMessage name="google_calendar_user" />
              </FormGroup>
              <FormGroup>
                <Label for="google_calendar_pwd">Google Calendar Pwd:</Label>

                <FormikInput
                  name="google_calendar_pwd"
                  id="google_calendar_pwd"
                />
                <FormikErrorMessage name="google_calendar_pwd" />
              </FormGroup>
            </CardBody>
          </Card> */}
        </Col>
      </Row>
    </>
  );
};

export default CalendarEmployee;
