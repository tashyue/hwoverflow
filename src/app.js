import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import LogIn from './LogIn';
import SignUp from './signUp';

class App extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar">
                    <Link to="/">
                        <button>HWOverflow</button>
                    </Link>
                    <input
                        type="text"
                        className="input"
                        placeholder="Search..."
                    />
                    <Link to="/LogIn">
                        <button>LogIn</button>
                    </Link>
                </nav>
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