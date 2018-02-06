import React, {Component} from 'react';
var Link = require("react-router-dom").Link;

import Header from './Header';
import Footer from './Footer';

export default class About extends Component {
  render() {

    return (
      <div>
        <Header/>
          <h1 className="about-me-header">About Me:</h1>
          <h2 className="about-main-text">Hi, Joel Cabrera. This is my web development portfolio. 
          I'm'currently a full-stack web developer student in NYCDA.
          I specialize in web and app design, front end development, and the user experience. 
          I love structure and order and I also stand for quality. 
          I love spending time on fixing little details and optimizing web apps.
          </h2>  
      </div>
    );
  }
}
