import React, { Component } from 'react';

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
                <button>Log In!</button>
                <button>Don't have an account? Sign Up!</button>
            </div>
        )
    }
}

export default LogIn;