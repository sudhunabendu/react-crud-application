import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Aditya",
      age: "31",
      address: "105, Sarada Pally Post Office Nimta Kolkata 700049"
    }
  }
  render() {
    return (
      <div>
        <h1>Name:{this.state.name}</h1>
        <h1>Address:{this.state.address}</h1>
        <h1>Age:{this.state.age}</h1>
      </div>
    );
  }
}

export default Home;