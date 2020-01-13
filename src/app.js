import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import LogIn from './logIn';
import SignUp from './signUp';
import './navBar.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="nav-bar">
                    <Link to="/">
                        <a className="logo">HWOverflow</a>
                    </Link>
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search..."
                        />
                        <button type="submit"><i class="material-icons">search</i></button>
                    </div>
                    <Link to="/LogIn">
                            <a className="login">Log In</a>
                    </Link>
                </div>
                <hr />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/LogIn' component={LogIn} />
                    <Route path='/SignUp' component={SignUp} />
                </Switch>
            </Router>
        )
    };
}

export default App;