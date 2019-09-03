import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component {
constructor(props){
super(props)
this.state={
  /* State to control weather the mobile menu is open or not. */
  menuActive: false
  }
}

/* Function to control weather the mobile menu is open or not. */
menuUpdate = () => {
if (this.state.menuActive === false ){
  this.setState({ menuActive: true})
  }else{
  this.setState({ menuActive: false});
  }
}

/* Function closes mobile menu and resets window position back to the top */
toTop = () => {
  window.scrollTo(0, 0);
  this.setState({ menuActive: false});
}

/* Ternary to activate mobile menu and Navigation Links */
render(){
    return(
    <nav className={(this.state.menuActive === false ) ? "topnav" : "topnav mobile-menu"} >
      <div>
        <NavLink activeClassName='is-active' onClick={this.toTop} exact to='/'>WHY BEES MATTER</NavLink>
        <NavLink activeClassName='is-active' onClick={this.toTop} to='/history-of-bees' >HISTORY OF BEES</NavLink>
        <NavLink activeClassName='is-active' onClick={this.toTop} to='/species-in-danger'>A SPECIES IN DANGER</NavLink>
        <div onClick={ () => this.menuUpdate() } className="icon" id="myMenuFunction">&#9776;</div>
      </div>          
    </nav>
    )    
  }
}