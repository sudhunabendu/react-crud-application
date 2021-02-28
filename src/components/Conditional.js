import React, { Component } from 'react';

class Conditional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    }
  }
  changeHandle = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {

    let val = "";
    if (this.state.username) {
      val = <h2>Hello {this.state.username}</h2>
    } else {
      val = "";
    }

    return (
      <form>
        {val}
        <p>Enter Your Name :  <input type="text" onChange={this.changeHandle} /> </p>

      </form>
    );
  }
}

export default Conditional;