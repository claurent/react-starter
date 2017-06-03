import React, { Component } from 'react';
// import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#/">Home</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/*<li className="nav-item">
        <a className="nav-link" href="#/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/experience">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/contact">Contact</a>
      </li>*/}
    </ul>
  </div>
</nav>
      </div>
    );
  }
}

export default Header;
