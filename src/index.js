import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="content">
        <div className="searchBar">
          <button>HWOverflow</button>
          <input
            type="text"
            className="input"
            placeholder="Search..."
          />
          <button>Log In</button>
        </div>
        <div className="logo">
          <h1>Homework Overflow</h1>
          <button>Sign up</button>
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

