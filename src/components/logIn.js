import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogIn extends Component {
    render() {
        return (
            <div className="content">
                <div className="greeting-container">
                    <h1>Welcome back!</h1>
                    <h2>Fill in the information to sign in</h2>
                </div>
                <div className="input-container">
                    <form>
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter email address"
                    />
                    <input
                        className="input"
                        type="password"
                        placeholder="Enter password"
                    />
                    <button className="large-button">Log In!</button>
                    </form>
                </div>
                <div className="account">
                    <p>Don't have an account? </p>
                    <Link to="/SignUp">
                        <a>Sign Up!</a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default LogIn;