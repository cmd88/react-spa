import React, {Component} from "react";

import './input.less';

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {input, label, placeholder, type, meta : {touched, error, warning}} = this.props;

        return (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={placeholder} type={type} />
                    {touched &&
                    ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
                </div>
            </div>
        )
    }
}