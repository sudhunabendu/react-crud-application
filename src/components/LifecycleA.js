import React, { Component } from 'react';

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FavouriteColor: "Red"
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ FavouriteColor: "Yellow" })
    }, 2000)
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("demo").innerHTML = "Before The Update ,the Favourite was " + prevState.FavouriteColor;
  }

  /*shouldComponentUpdate() {
    return true;
  }*/

  // changeColor = () => {
  //   this.setState({ FavouriteColor: "Blue" })
  // }

  componentDidUpdate() {
    document.getElementById("demo1").innerHTML = "The Update favourite Is " + this.state.FavouriteColor;
  }

  render() {
    return (
      <div>
        <h1>Fabourite Color Is = {this.state.FavouriteColor}</h1>
        <div id="demo"></div>
        <div id="demo1"></div>
        {/* <button type="button" onClick={this.changeColor}>Change Color</button> */}

      </div>
    );
  }
}

export default LifecycleA;