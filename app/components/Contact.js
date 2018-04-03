// Include React
import React, {Component} from 'react';
var Link = require("react-router-dom").Link;

import Header from './Header';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div class="wrapper">
          <h5>
            <p className="text-center">General Information</p>
              <p className="text-center" id="job-description">My Expertise</p>
              <p className="text-center" id="Code">I design using HTML5, CSS3, 
              JavaScript, JQuery, React.js. I love coding things from scratch, but I can work 
              with front-end frameworks like Bootstrap too. I can also work in Back-End Development 
              using Node.js, React Router, PostgreSQL, Passport, Sequelize.</p>
              <p className="text-center" id="bottom-blurb">I am currently avaliable for web developlment 
              and design purposes in New York or remotely. If you have any web-develpoment needs; don't 
              fear because I'm here!!</p>   
          </h5>
        </div>
      <div>
          <div className="text-center" id="contact">
            <h5>
              <p>Contact Info:</p>
              <p>You can reach out to me via:</p>
                <li class="text-center" id="phone"><a href="tel:917-569-2728">Phone</a></li>
                <li class="text-center" id="email"><a href="mailto:jcab118@gmail.com">E-mail</a></li>
                <br></br>
                <p>You can also follow me on <a href="https://www.instagram.com/joel_cabrera0711/?hl=en">Instagram</a>,
                  <a href="https://github.com/jcab118"> Github</a>,     
                  <a href="https://www.linkedin.com/in/jcab118/"> Linkedin</a> &
                  <a href="https://www.facebook.com/joey.cabrera.77"> Facebook</a>.
                  <br></br>
                </p>       
            </h5>    
          </div>
          <div className="" id="forum">
            <forum>
              <h5>
                <p>I’m currently available for freelance projects.</p> 
                  <label for="your-name">Your Name</label>
                  <input type="text" class="form-control" size ="40px" placeholder="Your  Name"></input>
              </h5>   
            </forum>      
          </div>      
          </div>
          <div id = "footer">
              <footer>
                <h6 className = "text-center" id="copyrite-tag">J. Cabrera - Full Stack Web Developer &copy; 2018 J. Cabrera.</h6>
              </footer>
          </div>
	     </div>
    );
  }
}