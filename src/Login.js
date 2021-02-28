import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  changeHandeler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandeler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost/react/public/api/customer', this.state)
      .then(Response => {
        console.log(Response)
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    let { email, password } = this.state
    return (
      <div className="col-6">
        <form onSubmit={this.submitHandeler}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>

            <input type="email" name="email" value={email} onChange={this.changeHandeler} className="form-control" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" name="password" value={password} onChange={this.changeHandeler} className="form-control" placeholder="Password" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div >
    );
  }
}

export default Login;