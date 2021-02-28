import React, { Component } from 'react';

class MultipleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: null,

    }
  }

  onSubmitHandle = (event) => {
    event.preventDefault();
    let age = this.state.age;

    if (!Number(age)) {
      alert("Your age must be a number");
    }
  }

  onChangeHandle = (event) => {
    let nam = event.target.name;
    let val = event.target.value;


    this.setState({ [nam]: val });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandle}>
        <h1>Hello :{this.state.name}</h1>
        <h1>Age is :{this.state.age}</h1>

        <h1>Enter Your Name :<input type="text" name="name" onChange={this.onChangeHandle} /></h1>
        <h1>Enter Your Age :<input type="text" name="age" onChange={this.onChangeHandle} /></h1>

        <input type="submit" />
      </form>
    );
  }
}

export default MultipleInput;