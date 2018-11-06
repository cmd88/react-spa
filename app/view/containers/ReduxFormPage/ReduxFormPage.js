import React, { Component } from 'react';
import { connect } from 'react-redux';

import './reduxFormPage.less';
import { ReduxFormBase } from 'components';


class ReduxFormPage extends Component {
    onSubmit = () => {
      console.log('on submit click');
    };

    render() {
      return (
        <div className="wrapper-redux-form">
          <ReduxFormBase onSubmit={this.onSubmit} />
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    form: state.form,
  };
}

export default connect(mapStateToProps, null)(ReduxFormPage);
