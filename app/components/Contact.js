// Include React
import React, {Component} from 'react';
var Link = require("react-router-dom").Link;

import Header from './Header';

export default class Contact extends React.Component {
  render() {
    return (
      <div id ="contact_pg">
      <div>
        <Header/>
      <div>
          <div className="text-center" id="contact">
            <div id="social">
                    <h5>Have a project you'd like to discuss?</h5>
                    <h5>Feel free to reach out via</h5>
                     <a href="tel:+19175692728">
                        <i class="fas fa-phone fa-3x"></i>
                    </a>
                    <a href="mailto:jcab118@gmail.com">
                       <i class="far fa-envelope-open fa-3x" aria-hidden="true"></i>
                    </a>
                    <h5>You can also follow me on</h5> 
                        <a href="https://www.facebook.com/joey.cabrera.77" target="_blank">
                           <i class="fab fa-facebook-square fa-3x"></i>
                        </a>
                        <a href="https://www.instagram.com/joel_cabrera0711/?hl=en" target="_blank">
                           <i class="fab fa-instagram fa-3x"></i>
                        </a>
                        <br></br>
                        <a href="https://github.com/jcab118" target="_blank">
                           <i class="fab fa-github fa-3x" ></i>
                        </a>    
                        <a href="https://www.linkedin.com/in/jcab118/" target="_blank">
                            <i class="fab fa-linkedin fa-3x"></i>
                        </a>       
                </div>     
          </div>      
          </div>
        <div id = "footer">
            <footer>
                <h6 className = "text-center" id="copyrite-tag">J. Cabrera - Full Stack Web Developer &copy; 2018 J. Cabrera.</h6>
            </footer>
      </div>
	     </div>
      </div>
    );
  }
}