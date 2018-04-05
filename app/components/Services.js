import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';


export default class Services extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        	<div className= "text-center" id ="services">
        		<h5 className="text-center" id="home-header">Services</h5>
        			<h5>Web Design</h5>
                    <h5>
        			 <ul className= "text-center">
	        			<li> A website should be an investment that gets you more customers, 
	        			gets rows your business and works across all devices</li>
                        <br></br>
	        			<li> That's exactly what I offer. By using the latest technologies 
	        			all my websites are built to order and unique to every project. No 
	        			templates here!</li>
                        <br></br>
	        			<li> There are certain things I make sure happen on every client project. 
                        The website has to load quickly and improve your business.</li>
	        		 </ul>
                    </h5>
	        	</div>
          <div className ="text-center" id="expertise">
            <h5>
              <h5 className="text-center">My Expertise</h5>
              <p>I love coding things from scratch, but I can work with front-end frameworks like 
              Bootstrap too. 
             </p>
              <h5> I design using</h5>
                <img id= "code" src = "./images/html5.jpg" height="100" width ="150"></img>
                <br></br>
                <img id= "code" src = "./images/css.png" height="100" width ="100"></img>
                <img id= "code" src = "./images/javascript.png" height="100" width ="100"></img>
                <img id= "code" src = "./images/jquery.jpg" height="100" width ="100"></img>
                <img id= "code" src = "./images/ReactJS.png" height="120" width ="125"></img>
                <p> I can work in Back-End Development using:</p> 
                <img id= "sm" src = "./images/sequelize.png" height="125" width ="150"></img>
                <br></br>
                <img id= "code" src = "./images/postgresql.png" height="125" width ="150"></img>
                <img id= "code" src = "./images/reactrouter.png" height="125" width ="150"></img>
                <img id= "code" src = "./images/node.png" height="125" width ="150"></img>
                <img id= "code" src = "./images/passport.png" height="125" width ="150"></img>
                <br></br>
            </h5>
        </div>
        <div className="text-center" id="blurb">
            <h5>General Information</h5>
            <h5 className="text-center">I am currently avaliable for web developlment 
            and design purposes in New York or remotely. If you have any web-develpoment needs; don't 
            fear because I'm here!!</h5> 
        </div>               
    	<div id = "footer">
            <footer>
                <h6 className = "text-center" id="copyrite-tag">J. Cabrera - Full Stack Web Developer &copy; 2018 J. Cabrera.</h6>
            </footer>
    	</div>
	  </div>   
    )
  }	
}


