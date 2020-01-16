import React, { Component } from 'react';

//import './App.css';

import '../styles/Navigation.css';




class Navigation extends Component {



    render (){
        const sections = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
        const navLinks = sections.map( section => {
             return (
                <li><a href={'#' + section }>{section}</a></li>
             )
        });
  return (
   <nav>
      <h2 className="logo">{this.props.LogoTitle}</h2>
        
      <ul>
          {navLinks}
       
          {/* <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li> */}
      </ul>
   </nav>

               

               

  );
}
}

export default Navigation;
