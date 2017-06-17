import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="container">
                <span className="footer-text">
                    Follow me on 
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/charles-laurent-0068a749/">
                        <img className="social-icon" alt="linkedin" src="assets/linkedin.png"></img>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/claurent" aria-label="Follow @claurent on GitHub">
                        <img className="social-icon" alt="github" src="assets/github.png"></img>
                    </a>
                </span>
            </div>
        </footer>
    );
  }
}

export default Footer;
