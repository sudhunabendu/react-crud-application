import React, { Component } from 'react';

class Myform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  myChange = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <div>

        <form>
          <h2>Name:{this.state.name}</h2>
          <h3>Enter Your Name:</h3>
          <input type="text" onChange={this.myChange} />
        </form>
      </div>
    );
  }
}

export default Myform;