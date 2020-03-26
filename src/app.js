import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import './style/normalize.css'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Login' component={Login} />
                    <Route path='/SignUp' component={SignUp} />
                    <Route path='/Dashboard' component = {Dashboard} />
                    <Route path='/Upload' component = {Upload} />
                </Switch>
            </Router>
        )
    };
}

export default App;