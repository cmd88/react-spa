import React, {Component} from "react";

export default class AnimateExamplePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(`[AnimateExamplePage] componentDidMount`);
    }

    componentWillMount() {
        console.log(`[AnimateExamplePage] componentWillMount`);
    }

    render() {
        return (
            <div><div>AnimateExamplePage container</div></div>
        )
    }
}