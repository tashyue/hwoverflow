import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div className="content">
                <h1>Welcome!</h1>
                <h2>
                    Create your new account by filling
                    in the following information
                </h2>
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
                    <input
                        className="input"
                        type="text"
                        placeholder="Confirm password"
                    />
                </div>
                <button>Sign Up!</button>
                <button>Already have an account? Log In!</button>
            </div>
        )
    }
}

export default SignUp;