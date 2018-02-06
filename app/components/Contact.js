// Include React
import React, {Component} from 'react';
var Link = require("react-router-dom").Link;

import Header from './Header';
import Footer from './Footer';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div class="wrapper">
            <h3 className="text-center">General Information</h3>
            <p className="text-center" id="job-description">My Expertise</p>
            <p className="text-center" id="Code">I design in the browser with HTML, CSS, JavaScript, JQuery, React & AJAX.
             I love coding things from scratch, but I can work with front-end frameworks like Bootstrap too. 
             I can also work in Back-End Development using PostgreSQL & Node.js. 
            </p>
            <p className="text-center" id="bottom-blurb">I am currently avaliable for web developlment and design purposes in New York or remotely. 
            If you have any web-develpoment needs; don't fear Joel is here!!</p>
            <p className="text-center" id="bottom-blurb">Feel free to contact me using any of the following Social Media Platforms; 
            Instagram, Facebook, & Linkedin</p>
          </div>
          <div>
            <h3 className="text-center">Contact Details</h3>
              <ul class="contact-info">
                <li class="text-center" id="phone"><a href="tel:917-569-2728">917-569-2728</a></li>
                <li class="text-center" id="email"><a href="mailto:jcab118@gmail.com">jcab118@gmail.com</a></li>
              </ul>
          </div>
				<Footer/>
	     </div>
    );
  }
}