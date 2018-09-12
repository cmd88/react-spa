import React, {Component} from "react";
import {Route} from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";

import {AnimatedSwitch, Footer, Header} from 'components';
import {AnimateExamplePage, MainPage, ReduxFormPage} from 'containers';

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
                                <Route exact path="/" render={() => <MainPage/>}/>
                                <Route exact path="/animateExamplePage"
                                       render={() => <AnimateExamplePage/>}/>
                                <Route path="/main" render={() => <MainPage/>}/>
                                <Route path="/redux-form" render={() => <ReduxFormPage/>}/>
                                <Route render={() => <MainPage/>}/>
                            </AnimatedSwitch>
                        </TransitionGroup>
                    )}
                />
                <Footer/>
            </div>
        )
    }
}