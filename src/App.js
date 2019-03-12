import './App.css';
import 'bootstrap/dist/js/bootstrap';

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Gun from 'gun/gun';
import Home from './components/home';
import UserLogin from './components/userlogin';
import UserRegistration from './components/userregistration';
import logo from './logo.svg';

require('gun/sea');

class App extends Component {
  render() {
    return (
    	<Router>
        <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={'/'} className="navbar-brand">DGstudio App </Link>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNavDropdown">
           <ul class="navbar-nav">
             <li class="nav-item active">
           <Link to={'/newUser'} className="nav-link">Sign Up</Link>
             </li>
             <li class="nav-item">
            <Link to={'/login'} className="nav-link">Log In</Link>
             </li>
             <li class="nav-item">
            <Link to={'/'} className="nav-link">Home</Link>
             </li>
           </ul>
         </div>
       </nav> <br/>
          <h2>DGstudio App</h2> <br/>
          <Switch>
              <Route exact path='/newUser' component={ UserRegistration } />
              <Route path='/login' component={ UserLogin } />
              <Route path='/' component={ Home } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
