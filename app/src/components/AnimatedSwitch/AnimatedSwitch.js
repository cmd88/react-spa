import React, { Component } from "react";
import { Switch } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";

import './animatedSwitch.less';

export default class AnimatedSwitch extends Switch {
    constructor(props) {
        super(props);
        this.state = {
            animate: new Animated.Value(0)
        };
        console.log("AnimatedSwitch constructor");
    }

    componentWillAppear(cb) {
        console.log("[AnimatedSwitch] componentWillAppear");
        setTimeout(
            () => Animated.spring(this.state.animate, { toValue: 1 }).start(),
            250
        );
        cb();
    }

    componentWillEnter(cb) {

        console.log("[AnimatedSwitch] componentWillEnter");
        setTimeout(
            () => Animated.spring(this.state.animate, { toValue: 1 }).start(),
            250
        );
        cb();
    }

    componentWillLeave(cb) {
        console.log("[AnimatedSwitch] componentWillLeave");
        Animated.spring(this.state.animate, { toValue: 0 }).start();
        setTimeout(() => cb(), 175);
    }

    render() {
        console.log("[AnimatedSwitch] render");
        const style = {
            opacity: Animated.template`${this.state.animate}`,
            transform: Animated.template`
				translate3d(0,${this.state.animate.interpolate({
                inputRange: [0, 1],
                outputRange: ["12px", "0px"]
            })},0)
			`
        };

        return (
            <Animated.div style={style} className="animated-page-wrapper">
                {super.render()}
            </Animated.div>
        );
    }
};