import React, { Component } from 'react';
// import { Router, Route } from 'react-router'
import { HashRouter as Router, Route } from 'react-router-dom'; 

// import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
// import NotFound from './components/notfound/NotFound.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <Header />
        <Router>
          <div className="App-container container">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            {/*<Route path='*' component={NotFound} />*/}
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
