import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <h1 className="text-center" id="home-header">J. Cabrera's Profile</h1>
        <ul id="gallery">
            <li>
              <a href="https://github.com/jcab118/Google-Weather-API">
                <img src="./images/image 1.jpg" alt=""/>
                <p className="img-title">Google Weather App.</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/jcab118/Sound_Cloud-API">
                <img src="./images/pjvweb.jpg" alt=""/>
                <p className="img-title">Sound_Cloud-API.</p>
              </a>
            </li>
          </ul>
        <Footer/>
      </div>
    )
  }
}

