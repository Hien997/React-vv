/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useMemo, useState } from 'react';
import { Row, Col, CardBody, Card } from 'reactstrap';
import UploadAvatar from 'src/screens/admin/Customer/views/Edit/uploadAvatar';
import {
  FormGroupInputPasswordItem,
  FormGroupTextMaskItem,
  FormGroupCheckboxItem,
  FormGroupInputItem,
  FormGroupRadio,
  FormGroupDateInputItem,
  FormGroupMultiSelectCodeInputItem,
  FormGroupSelectInputItem,
} from '../../../../../components/admin/Form/FormGroup';

import { Code } from '../../../../../config/code';
import blankProfile from '../../../../../assets/img/avatars/blank-profile.png';
import { TEXT_MARKER } from '../../../../../constants/text-marker';

const AvatarStyle = { width: 160, height: 160, cursor: 'pointer' };

const BasicInformation = () => {
  const [isUploadAvatar, setIsUploadAvatar] = useState(false);

  const [, setAvatarFile] = useState();
  const [avatar, setAvatar] = useState();
  const memoAvatar = useMemo(() => {
    let ret = blankProfile;
    if (avatar) {
      ret = avatar;
    }
    return ret;
  }, [avatar]);

  const onShowUploadAvatar = () => {
    setIsUploadAvatar(true);
  };

  return (
    <>
      <Row>
        <Col md="9" sm="12" className="m-0">
          <Row>
            <Col md="6" sm="12" className="m-0">
              <FormGroupInputItem
                label="Employee Code"
                name="employee.employee_code"
                required
              />
            </Col>
            <Col md="6" sm="12" className="m-0">
              <FormGroupTextMaskItem
                label="SSN"
                name="employee.employee_ssn"
                mask={TEXT_MARKER.SSN}
              />
            </Col>
          </Row>

          <Row>
            <Col md="6" sm="12" className="m-0">
              <FormGroupInputItem label="Name" name="full_name" required />
            </Col>
            <Col md="6" sm="12" className="m-0">
              <FormGroupTextMaskItem
                label="Phone"
                name="phone"
                mask={TEXT_MARKER.PHONE}
              />
            </Col>
          </Row>

          <Row>
            <Col md="6" sm="12" className="m-0">
              <FormGroupInputItem label="Email" name="email" required />
            </Col>
            <Col md="6" sm="12" className="m-0">
              <FormGroupInputPasswordItem
                label="Password"
                name="password"
                required
              />
            </Col>
          </Row>

          <Row>
            <Col md="6" sm="12" className="m-0">
              <FormGroupMultiSelectCodeInputItem
                label="Store info"
                name="stores"
                codeName="stores"
                required
              />
            </Col>
            <Col md="6" sm="12" className="m-0">
              <FormGroupSelectInputItem
                placeholder="Select..."
                label="Status"
                name="published"
                required
                options={Code.Status}
              />
            </Col>
          </Row>

          <Row>
            <Col md="6" sm="12" className="m-0">
              <FormGroupTextMaskItem
                label="Birthday"
                name="employee.birthday"
                mask={TEXT_MARKER.BIRTHDAY}
              />
            </Col>

            <Col md="6" sm="12" className="m-0">
              <FormGroupDateInputItem
                label="Hiring Date"
                name="employee.hiring_date"
              />
            </Col>
          </Row>

          <Row>
            <Col md="6" sm="12" className="m-0">
              <FormGroupRadio
                label="Gender"
                name="employee.gender"
                options={Code.Gender}
              />
            </Col>
            <Col md="6" sm="12" className="m-0">
              <FormGroupInputItem
                label="Safety box"
                name="employee.safety_box"
              />
            </Col>
          </Row>
        </Col>

        <Col sm="12" md="3">
          <Row>
            <Col md="12">
              <Card className="text-center">
                <CardBody>
                  <img
                    src={memoAvatar}
                    className="img-avatar"
                    alt="avatar"
                    style={AvatarStyle}
                    onClick={onShowUploadAvatar}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <div className="pl-4">
                {/* <FormGroupCheckboxItem
                label="No picture"
                name="employee.active_avatar"
                id="active_avatar"
              /> */}
                <FormGroupCheckboxItem
                  label="No receipt"
                  name="employee.active_receipt"
                  id="active_receipt"
                />

                {/* <FormGroupCheckboxItem
                label="Display birthday"
                name="employee.active_birthday"
                id="active_birthday"
              /> */}

                {/* <FormGroupCheckboxItem
                  label="Active Employee"
                  name="published"
                  id="published"
                  unCheckedValue="0"
                  checkedValue="1"
                /> */}

                <FormGroupCheckboxItem
                  label="Open cashier"
                  name="employee.open_cashier_drawer"
                  id="open_cashier_drawer"
                />

                <FormGroupCheckboxItem
                  label="Show Amount"
                  name="employee.active_amount"
                  id="active_amount"
                />

                <FormGroupCheckboxItem
                  label="Show Daily Income"
                  name="employee.active_daily_income"
                  id="active_daily_income"
                />

                {/* <FormGroupCheckboxItem
                  label="Take turn manager"
                  name="employee.active_manager"
                  id="active_manager"
                /> */}

                {/* <FormGroupCheckboxItem
                  label="Plus Amount Gift Card"
                  name="employee.active_plus_amount_gift_card"
                  id="active_plus_amount_gift_card"
                /> */}

                <FormGroupCheckboxItem
                  label="Active Booking Appointment"
                  name="employee.active_booking_appt"
                  id="active_booking_appt"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {isUploadAvatar && (
        <UploadAvatar
          avatar={avatar}
          setFile={setAvatarFile}
          setAvatar={setAvatar}
          setShow={setIsUploadAvatar}
        />
      )}
    </>
  );
};

export default BasicInformation;
