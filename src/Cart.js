import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "nabendu bose"
    }
    console.log("constuctor");
  }

  componentDidMount() {
    console.log("componentdidmount");
  }

  componentDidUpdate(preProps, prevstate) {
    console.log("Updated", preProps, prevstate);
  }



  render() {
    return (
      console.log("render"),
      < div >
        <button onClick={() => this.setState({ name: "Sarada" })}>Click Me</button>
      </div >
    );
  }
}

export default Cart;