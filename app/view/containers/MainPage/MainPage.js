import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as reducerOneActions from 'actions/actionsOne';

import './mainPage.less';

class MainPage extends Component {
  componentWillMount() {
    console.log('[MainPage] componentWillMount');
  }

  componentDidMount() {
    console.log('[MainPage] componentDidMount');
  }

  clickButton = () => {
    const { reducerOne, addSomeProp } = this.props;
    addSomeProp({ propTwo: reducerOne.propTwo + 1 });
  };

  render() {
    const { reducerOne } = this.props;
    console.log(this.props);
    return (
      <div className="wrapper-main-page">
        <div>MainPage container</div>
        <div className="text">{reducerOne.propTwo}</div>
        <button type="button" className="button" onClick={this.clickButton.bind(this)}>button</button>
      </div>
    );
  }
}

MainPage.propTypes = {
  reducerOne: PropTypes.objectOf(['propOne', 'propTwo']).isRequired,
  addSomeProp: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    reducerOne: state.reducerOne,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...reducerOneActions,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
