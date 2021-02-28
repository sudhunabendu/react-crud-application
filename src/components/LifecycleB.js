import React, { Component } from 'react';

class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fevColor: "Green"
    }
    console.log("constructor");
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ fevColor: "Blue" })
    }, 2000)
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    document.getElementById("mtdiv").innerHTML = "The updated favorite is" + this.state.fevColor;
    console.log("componentDidUpdate");

  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>My Favorite Color is {this.state.fevColor}</h1>
        <div id="mtdiv"></div>
      </div>
    );
  }
}

export default LifecycleB;