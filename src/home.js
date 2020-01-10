import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="content">
        <div className="logo">
          <h1>Homework Overflow</h1>
          <Link to="/SignUp">
            <button className="largeButton">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="about-us">
          <h2>About Us</h2>
          <h3>
            Quick description of our product for 
            people to see on the home page of the website
          </h3>
        </div>
      </div>
    )
  }

}

export default Home;

