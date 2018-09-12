import React, {Component} from "react";
import {connect} from "react-redux";
import {formValueSelector} from 'redux-form';

import './reduxFormPage.less';
import {ReduxFormBase} from "components";


class ReduxFormPage extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit = () => {
        console.log("on submit click");
        console.log(this.props.form);
    };

    render() {
        return (
            <div className="wrapper-redux-form">
                <ReduxFormBase onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        form: state.form
    };
}

export default connect(mapStateToProps, null)(ReduxFormPage);