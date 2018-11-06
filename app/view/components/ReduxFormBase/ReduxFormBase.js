import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import './reduxFormBase.less';

class ReduxFormBase extends Component {
  render() {
    const {
      handleSubmit, pristine, reset, submitting,
    } = this.props;
    console.log('reduxFormBase:');
    console.log(this.props);
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
          </button>
        </div>
      </form>
    );
  }
}

ReduxFormBase.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
};

ReduxFormBase.defaultProps = {
  pristine: false,
  reset: () => {},
  submitting: false,
};


export default reduxForm({ form: 'reduxFormBase' })(ReduxFormBase);
