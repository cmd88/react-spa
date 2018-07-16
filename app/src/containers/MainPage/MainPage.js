import React, {Component} from "react";
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import * as reducerOneActions from 'actions/actionsOne';

import './mainPage.less';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateProp: false
        }
    }

    componentDidMount() {
        console.log(`[MainPage] componentDidMount`);
    }

    componentWillMount() {
        console.log(`[MainPage] componentWillMount`);
    }

    clickButton() {
        const {reducerOne, addSomeProp} = this.props;
        addSomeProp({propTwo: reducerOne.propTwo+1});
    }

    render() {
        const {reducerOne} = this.props;
        console.log(this.props);
        return (
            <div className="wrapper-main-page">
                <div>MainPage container</div>
                <div className="text">{reducerOne.propTwo}</div>
                <div className="button" onClick={this.clickButton.bind(this)}>button ></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reducerOne: state.reducerOne
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...reducerOneActions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);