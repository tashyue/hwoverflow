import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css';

class Home extends Component {
  render() {
    return (
      <div className="content">
        <h1 className="logo">HW Overflow</h1>
        <Link to="/SignUp">
          <button className="large-button">Sign Up</button>
        </Link>
      </div>
    )
  }
}

export default Home;

