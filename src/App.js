import React, { Component } from 'react';
// import { Router, Route } from 'react-router'
import { HashRouter as Router, Route } from 'react-router-dom'; 

// import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Experience from './components/experience/Experience.js';
// import NotFound from './components/notfound/NotFound.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div className="App-container container">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/education" component={Experience}/>
            <Route path="/contact" component={Experience}/>
            {/*<Route path='*' component={NotFound} />*/}
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
