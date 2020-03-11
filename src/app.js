import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import LogIn from './components/logIn';
import SignUp from './components/signUp';
import './style/navBar.css';
import VideoThumbnail from './components/videoThumbnail';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import Edit_Profile from './components/edit_profile';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="nav-bar">
                    <Link to="/">
                        <a className="logo">HWOverflow</a>
                    </Link>
                    <div className="search-container">
                        <form className="search">
                            <input
                                type="text"
                                placeholder="Search..."
                            />
                            <button type="submit"><i class="material-icons">search</i></button>
                        </form>
                    </div>
                    <Link to="/LogIn">
                            <a className="login">Log In</a>
                    </Link>
                </div>
                {/* <div className="footer">
                    <h2>About Us</h2>
                    <h3>
                        Quick description of our product for 
                        people to see on the home page of the website
                    </h3>
                </div> */}
                {/* <hr /> */}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/LogIn' component={LogIn} />
                    <Route path='/SignUp' component={SignUp} />
                    <Route path='/Dashboard' component = {Dashboard} />
                    <Route path='/Profile' component = {Profile} />
                    <Route path='/Edit_Profile' component = {Edit_Profile} />
                </Switch>
            </Router>
        )
    };
}

export default App;