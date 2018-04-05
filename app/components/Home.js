import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className ="text-center" id ="nyc">
            <img id= "code" src = "./images/nyc.jpeg"></img>
        </div>
        <div className ="text-center" id="pic_header">
            <h1 class ="main">Looking for Web Developer?</h1>
            <h5>Look no further.</h5> 
        </div>
        <div className= "text-center" id ="intro">
        	   <h1 className="text-center"></h1>
    			<h5>I am Full-Stack Web Developer living in the Capital of the World, 
    			New York City.</h5>
        </div>
            <div className= "text-center" id= "info">
            	<div className ="text-center" id ="about">
            		<h5>About</h5>
            		<h5>I majored Psychology and minored in Computer Information Systems at 
                        John Jay College of Criminal Justice; and then put my love of languages 
                        to use at the New York Code + Design Academy.</h5>
                    <h5>I strive to build immersive and dynamic web applications 
                        through carefully crafted code and user-centric design.</h5>
                    <h5>I love to code, have a knack for design, and have built 
            		  websites and applications.</h5>
            	</div>
            	<div className = "text-center" id ="skills">
            		<h5>Services</h5>
            		<h5>UI/UX Design</h5>
            		<h5>Front-End Development:</h5>
            		<h5>Front End Development is building out the visual components of a 
            		    website. I build these visual components using: 
                        <br></br>
                        <img id= "code" src = "./images/html5.jpg" height="100" width ="150"></img>
                        <br></br>
                        <img id= "code" src = "./images/css.png" height="100" width ="100"></img>
                        <img id= "code" src = "./images/javascript.png" height="100" width ="100"></img>
                        <img id= "code" src = "./images/jquery.jpg" height="100" width ="100"></img>
                        <img id= "code" src = "./images/ReactJS.png" height="120" width ="125"></img>
                        </h5>
            		 <h5>Back-End Development:</h5>
                        <img id= "sm" src = "./images/sequelize.png" height="125" width ="150"></img>
                        <br></br>
                        <img id= "code" src = "./images/postgresql.png" height="125" width ="150"></img>
                        <img id= "code" src = "./images/reactrouter.png" height="125" width ="150"></img>
                        <img id= "code" src = "./images/node.png" height="125" width ="150"></img>
                        <img id= "code" src = "./images/passport.png" height="125" width ="150"></img>
                        
                </div>
            	<div className = "text-center" id ="featured_work" >
                    <h5>Featured Work:</h5>
                    <h5>Link-Up</h5>
                    <a href ="https://github.com/jcab118/Link-Up"  onClick="document.location=this.id+'.html';return false;" >
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
                <div id = "footer">
                    <footer>
                        <h4 className = "text-center" id="copyrite-tag">J. Cabrera - Full Stack Web Developer &copy; 2018 J. Cabrera.</h4>
                    </footer>
                </div>
            </div>
      </div>
    )
  }
}

