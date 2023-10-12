import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Marketplace from './components/Marketplace';
import Profile from './components/Profile';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/marketplace" component={Marketplace} />
                    <Route path="/profile" component={Profile} />
                    {/* I will add more routes as needed */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
