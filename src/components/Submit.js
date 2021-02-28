import React, { Component } from 'react';

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  onSubmitHandle = (event) => {
    event.preventDefault();
    alert("You are submitting" + this.state.name);
  }

  onChangeHandle = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandle}>
        <h2>Hello{this.state.name}</h2>
        <p>Enter Your name:<input type="text" onChange={this.onChangeHandle} /></p>
        <input type="submit" />
      </form>
    );
  }
}

export default Submit;