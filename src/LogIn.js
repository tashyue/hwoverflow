import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogIn extends Component {
    render() {
        return (
            <div className="content">
                <h1>Welcome back!</h1>
                <h2>Fill in the information to sign in</h2>
                <div className="input">
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter email address"
                    />
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter password"
                    />
                </div>
                <Link to="/Dashboard">
                    <button>Log In!</button>
                </Link>
                <Link to="/SignUp">
                    <button>Don't have an account? Sign Up!</button>
                </Link>
            </div>
        )
    }
}

export default LogIn;