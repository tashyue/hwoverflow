import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import LogIn from './pages/login';
import SignUp from './pages/signUp';
import Navbar from './components/Navbar';

class App extends Component {
    render() {
        return (
            <div className="App">
            <Router>
            <Navbar />
                <div className ="container">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/LogIn' component={LogIn} />
                    <Route path='/SignUp' component={SignUp} />
                </Switch>
                </div>
            </Router>
            </div>
        )
    };
}

export default App;