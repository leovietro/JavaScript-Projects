import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";
import Home from './components/Pages/Home';
import logo from './logo.svg';
import './App.css';
import SendCode from './components/Pages/SendCode';
import SearchCode from './components/Pages/SearchCode';
import About from './components/Pages/About';

class App extends Component {
  

  render() {
    return (
      <Router>
        <Route
          exact={true}
          path="/"
          component={Home}
        />

        <Route
          exact={true}
          path="/submitcode"
          component={SendCode}
        />

        <Route
          exact={true}
          path="/searchcode"
          component={SearchCode}
        />

        <Route
          exact={true}
          path="/about"
          component={About}
        />
      </Router>
    );
  }
}

export default App;