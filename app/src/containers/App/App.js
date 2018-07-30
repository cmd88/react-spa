import React, {Component} from "react";
import {Route} from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";

import {AnimatedSwitch, Footer, Header} from "components";
import {AnimateExamplePage, MainPage} from "containers";

import './app.less';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper-page">
                <Header/>
                <Route
                    render={({location}) => (
                        <TransitionGroup component="main">
                            <AnimatedSwitch key={location.key} location={location}>
                                <Route exact path="/" render={props => (<MainPage {...props}/>)}/>
                                <Route exact path="/animateExamplePage"
                                       render={props => (<AnimateExamplePage {...props}/>)}/>
                                <Route path="/main" render={props => (<MainPage {...props}/>)}/>
                                <Route render={props => (<MainPage {...props}/>)}/>
                            </AnimatedSwitch>
                        </TransitionGroup>
                    )}
                />
                <Footer/>
            </div>
        )
    }
}