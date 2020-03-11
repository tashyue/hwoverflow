import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import LogIn from './components/logIn';
import SignUp from './components/signUp';
import './style/navBar.css';
import VideoThumbnail from './components/videoThumbnail';
import Dashboard from './components/dashboard';
import NavBar from './components/NavBar';

class App extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <div className="footer">
                    <h2>About Us</h2>
                    <h3>
                        Quick description of our product for 
                        people to see on the home page of the website
                    </h3>
                </div> 
                {/* <hr /> */}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/LogIn' component={LogIn} />
                    <Route path='/SignUp' component={SignUp} />
                    <Route path='/Dashboard' component = {Dashboard} />
                </Switch>
            </Router>
        )
    };
}

export default App;