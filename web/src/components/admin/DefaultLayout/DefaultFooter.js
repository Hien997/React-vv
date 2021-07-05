import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    return (
      <>
        <span>Cloud PCNails Salon &copy; 2020</span>
        <span className="ml-auto">
          Powered by <a href="https://coreui.io/react">CoreUI for React</a>
        </span>
      </>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
