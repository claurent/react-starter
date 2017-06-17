import React, { Component } from 'react';
// import './Header.css';

class Header extends Component {
  navigate(state) {
    window.location.href = '#/' + state;
  }

  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" data-toggle="collapse" data-target="#navbarSupportedContent" href="#/" onClick={() => this.navigate('')}>Charles</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent.show">
        <a className="nav-link" href="#/about" onClick={() => this.navigate('about')}>About</a>
      </li>
      <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent.show">
        <a className="nav-link" href="#/experience" onClick={() => this.navigate('experience')}>Experience</a>
      </li>
      <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent.show">
        <a className="nav-link" href="#/education" onClick={() => this.navigate('education')}>Education</a>
      </li>
      <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent.show">
        <a className="nav-link" href="#/contact" onClick={() => this.navigate('contact')}>Contact</a>
      </li>
    </ul>
  </div>
</nav>
      </div>
    );
  }
}

export default Header;
