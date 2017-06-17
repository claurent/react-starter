import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div>
            <img className="bg" src="assets/engineer.png" alt="Background"/>
            {/*<p>Welcome to Charles Laurent's website!</p>
            <p>This site is currently under construction</p>
            <p>Contact me on <a target="_blank" href="https://www.linkedin.com/in/charles-laurent-0068a749/">LinkedIn</a></p>*/}
            <div className="home-header">
              <p className="home-title">Charles Laurent</p>
              {/*<p className="home-support">Software Developer</p>*/}
            </div>
        </div>
    );
  }
}

export default Home;
