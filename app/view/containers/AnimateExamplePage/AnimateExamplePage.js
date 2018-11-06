import React, { Component } from 'react';

export default class AnimateExamplePage extends Component {
  componentWillMount() {
    console.log('[AnimateExamplePage] componentWillMount');
  }

  componentDidMount() {
    console.log('[AnimateExamplePage] componentDidMount');
  }

  render() {
    return (
      <div><div>AnimateExamplePage container</div></div>
    );
  }
}
