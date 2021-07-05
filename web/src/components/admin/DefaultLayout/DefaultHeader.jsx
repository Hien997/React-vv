import React, { Component } from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  UncontrolledDropdown,
} from 'reactstrap';
import PropTypes from 'prop-types';

import {
  AppAsideToggler,
  AppNavbarBrand,
  AppSidebarToggler,
} from '@coreui/react';

import logo from '../../../assets/img/brand/logo-pos.png';
import sygnet from '../../../assets/img/brand/sygnet.svg';
import avatar from '../../../assets/img/avatars/6.jpg';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 145, alt: 'POSNail Store Logo' }}
          minimized={{
            src: sygnet,
            width: 30,
            height: 30,
            alt: 'POSNail Store Logo',
          }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img
                src={avatar}
                className="img-avatar"
                alt="admin@bootstrapmaster.com"
              />
            </DropdownToggle>
            <DropdownMenu right style={{ height: '400px', right: 0 }}>
              <DropdownItem>AppHeaderDropdown</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
      </>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
