import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      message: '',
    };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      message: error.message,
    });
  }

  render() {
    if (this.state.hasError) {
      return <p>{this.state.message}</p>;
    }
    return this.props.children;
  }
}
