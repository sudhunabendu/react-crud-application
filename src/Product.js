import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '',
      qty: 0
    }
  }

  addToCart = (pid) => (
    this.setState((state) => (
      { productId: pid, qty: state.qty + 1 }
    ))
  )

  render() {
    return (
      <div>
        <button onClick={() => this.addToCart(1)}>Add To Cart</button>

        <Cart productId={this.state.productId} qty={this.state.qty} />
      </div>
    );
  }
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props.qty
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.qty !== state.qty) {
      return { qty: props.qty }
    }
    return null;
  }

  /*updateQty = () => (
    this.setState((state) => (
      { qty: state.qty + 1 }
    ))
  )*/



  componentDidMount() {
    console.log("execute after component render");
  }

  componentDidUpdate(preProps, prevState) {
    console.log("Component Update");

  }


  render() {
    return (
      <div>
        <h2>Cart Item{this.state.qty}</h2>
        {/* <button onClick={this.updateQty}>Update</button> */}
      </div>
    )
  }
}

export default Product;