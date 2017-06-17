import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <h1>Charles Laurent</h1>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <img className="about-image" src="assets/charles.png"></img>
          </div>
          <div className="col-md-8">
            <div className="about-description">
              <p>Hi, I'm Charles!</p>
              <p>I'm a software developer!</p>
              <p>
                I was born in Brussels, Belgium and moved to the US the day before my third birthday!
                I grew up in Marietta, GA. Then I went to school in Philly, followed by 2 years in New York,
                and now I live in Fort Lauderdale, FL with my fianc&eacute;e, Liz!
              </p>
              <p><a href="#/contact">Contact me</a> to learn more!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
