import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";

class UserLogin extends Component {
  state = {};
  render() {
    return (
      <div class="Absolute-Center rectangle">
        <form className="form-signin text-center">
          <h1 className="h3 mb-3 font-weight-normal text-center">Please Sign Up </h1>
          <label for="inputEmail" className="sr-only">
            User ID
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="User ID"
            required
            autofocus
          />
          
          <label for="inputPassword" class="sr-only">
            Password
          </label>
          
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-dark btn-lg btn-block"> Login</button>
        </form>
      </div>
    );
  }
}

export default UserLogin;
