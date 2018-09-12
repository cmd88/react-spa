import React, {Component} from "react";
import { NavLink } from 'react-router-dom'

import './header.less';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="wrapper-header">
                <div className="wrapeer-navlinks">
                    <NavLink to="/">Main</NavLink>
                    <NavLink to="/animateExamplePage">animateExamplePage</NavLink>
                    <NavLink to="/redux-form">Redux Form</NavLink>
                </div>
            </div>
        )
    }
}