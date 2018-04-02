import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';


export default class Services extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        	<div className= "text-center" id ="services">
        		<h1 className="text-center" id="home-header">Services</h1>
        		<h5>Web Design</h5>
        		<ul className= "text-center">
	        		<li> Awebsite should be an investment that gets you more customers, 
	        		grows your business and works across all devices</li>
	        		<li> That's exactly what I offer. By using the latest technologies 
	        		all my websites are built to order and unique to every project. No 
	        		templates here!</li>
	        		<li> There are certain things I make sure happen on every client project. The website has to 
	        		load quickly and improve your business.</li>
	        	</ul>
	        </div>
	  </div>   
	)
  	}	
}


