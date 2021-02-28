import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Aditya Basu"
    }
    console.log("this is a constructor");
  }

  static getDerivedStateFromProps() {
    console.log("this is a getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("this is a componentDidMount");
  }

  render() {
    console.log("This is A render");
    return (
      <div>
        <h4>Name is : {this.state.name}</h4>
      </div>
    );
  }
}

export default Lifecycle;