import React, { Component } from 'react';

class CounterApp extends Component {
  // Initialize state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    // Bind methods to `this`
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // Define increment method
  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  // Define decrement method
  decrement() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterApp;
