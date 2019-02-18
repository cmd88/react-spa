import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class AppValidationDecorator extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  }

  /**
   * React render method
   * @return {XML}
   */
  render() {
    const { children } = this.props;

    if (!children) return <div>empty block</div>;

    return children;
  }
}

export default () => withRouter(AppValidationDecorator);
