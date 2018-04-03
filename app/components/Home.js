import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        	<h1 className="text-center" id="home-header"></h1>
    		<div className= "text-center" id ="intro">
             <img id= "code" src = "./images/javascript_code.jpg"></img>
    			<h5>I am Full-Stack Web Developer living in the Capital of the World, 
    			New York City.</h5>
                <h5>I majored Psychology and minored in Computer Information Systems at 
                John Jay College of Criminal Justice; and then put my love of languages 
                to use at the New York Code + Design Academy.</h5>
    			<h5>I strive to build immersive and dynamic web applications 
    			through carefully crafted code and user-centric design.</h5>
    			<h5>Have a project you'd like to discuss?</h5>
    			<h5>Feel free to reach out via <a href="mailto:jcab118@gmail.com">E-mail</a></h5>
                <div>
                    <h5>
                        <p>You can also follow me on <a href="https://www.instagram.com/joel_cabrera0711/?hl=en">Instagram</a>,
                        <a href="https://github.com/jcab118"> Github</a>,     
                        <a href="https://www.linkedin.com/in/jcab118/"> Linkedin</a> &
                        <a href="https://www.facebook.com/joey.cabrera.77"> Facebook</a>
                        </p>   
                    </h5> 
                </div>
        	</div>
            <div className= "text-center" id= "info">
            	<div className ="text-center" id ="about">
            		<h5>About</h5>
            		<h5>I love to code, have a knack for design, and have built 
            		websites and applications.</h5>
            	</div>
            	<div className = "text-center" id ="skills">
            		<h5>Services</h5>
            		<h5>UI/UX Design</h5>
            		<h5>Front-End Development:</h5>
            		<h5>Front End Development is building out the visual components of a 
            		    website. I build these visual components using: HTML5, CSS3, 
            		    JavaScript, JQuery, React.js</h5>
            		<h5>Back-End Development:</h5>
                    <h5>Node.js, React Router, PostgreSQL, Passport, Sequelize</h5>
                </div>
            	<div className = "text-center" id ="featured_work" >
                    <h5>Featured Work:</h5>
                    <h5>Link-Up</h5>
                    <a href ="https://github.com/jcab118/Link-Up"  onclick="document.location=this.id+'.html';return false;" >
                    <img id= "links" src = "./images/links.jpg" target="Link-Up"/>
                    </a>
                    <h5>Have any of the following happened to you:</h5>
                    <h5>Left hanging after a friend committed to an activity?</h5>
                    <h5>Didn't do an activity you were looking forward to because you didn't 
                        have someone to do it with?</h5>
                    <h5>Decided to do an activity by yourself and didn't have the same enjoyment
                     because you were by yourself?</h5>
                    <h5>Link-Up is a app which allows everyday people to connect with locals in
                    a desired location to hangout or (Link-Up) </h5>
                </div>  
                <div id = "footer">
                    <footer>
                        <h6 className = "text-center" id="copyrite-tag">J. Cabrera - Full Stack Web Developer &copy; 2018 J. Cabrera.</h6>
                    </footer>
                </div>
            </div>
      </div>
    )
  }
}

