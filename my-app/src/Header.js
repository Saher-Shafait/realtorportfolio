import React, {Component} from 'react';
import Background from './img/home.jpg';
import './Header.css';


const mystyles = {
    backgroundImage: `url(${Background})`,
    height: '80vh',
    backgroundSize: 'cover',
    
}


class Header extends Component {


    render() {
        return (


            
             <header style={mystyles}>
                 
                   
                   <div class="circle">
                   <h1>{this.props.title}</h1>
                   <p>Charlotte's Finest Properties</p>
                   </div>
                   <a href="#button">{this.props.button}</a>
             </header>
        );
    }
};

export default Header;