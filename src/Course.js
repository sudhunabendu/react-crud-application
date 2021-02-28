import React, { Component } from 'react';
import axios from 'axios';
// import Swal from "sweetalert2";

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost/react/public/api/customer')
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  // deleteHandeler(id) {
  //   fetch('http://localhost/react/public/api/customer' + id,
  //     {
  //       method: "DELETE",
  //     }).then((result) => {
  //       result.json().then((resp) => {
  //         alert("Delete Success")
  //       })
  //     })
  // }

  // deleteHandeler = (id) => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((response) => {
  //     axios('http://localhost/react/public/api/customer' + id)
  //       .then((response) => {
  //         // const posts = this.state.posts;
  //         // for (let i = 0; i < posts.length; i++) {
  //         //   if (posts[i].id === id) {
  //         //     posts.splice(i, 1);
  //         //     this.setState({ posts: posts })
  //         //   }
  //         // }
  //         this.refreshCustomer();
  //       });
  //   })
  // }

  // deleteHandeler = userId => {
  //   const requestOptions = {
  //     method: 'DELETE'
  //   };
  //   fetch("http://localhost/react/public/api/customer" + userId, requestOptions)
  //     .then((response) => {
  //       return response.json();
  //     }).then((result) => {
  //     });
  // }

  deleteHandeler = (id) => {
    // DELETE request using fetch with async/await
    async function deletePost() {
      await fetch('http://localhost/react/public/api/customer/' + id, {
        method: 'DELETE'
      });
      // setStatus('Delete successful');
      alert("Delete Success");

    }
    deletePost();
  };

  editHandeler = (id) => {
    alert(id);
  }

  render() {
    const posts = this.state.posts;
    const allposts = posts.map((post, idx) => {
      return (
        <table border="1" className="table table">
            <tr>
              <th>Id Number</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
         
          <tr>
            <td>{post.id}</td>
            <td>{post.email}</td>
            <td>{post.password}</td>
            <td>
              <button className="btn btn-primary" onClick={() => this.editHandeler(post.id)}>Edit</button>
              <button className="btn btn-danger" onClick={() => this.deleteHandeler(post.id)}>Delete</button>
            </td>
          </tr>
        </table>
      )

    });
    return (
      <div className="alert alert-success" >
        <p>{allposts}</p>
      </div>
    );
  }
}

export default Course;