import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/signUp.css';

class SignUp extends Component {
    render() {
        return (
            <div className="content">
                <div className="greeting-container">
                    <h1>Welcome!</h1>
                    <h2>
                        Create your new account by <br /> 
                        filling in the following information
                    </h2>
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
                        <input
                            className="input"
                            type="password"
                            placeholder="Confirm password"
                        />
                        <button className="large-button">Sign Up!</button>
                    </form>
                </div>
                <div className="account">
                    <p>Already have an account? </p>
                    <Link to="/LogIn">
                        <a>Log in!</a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default SignUp;