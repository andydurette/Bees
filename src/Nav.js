import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component {

/* Nav retrieves functions from App.js then using props sends response back through onClick */
render(){
    return(
    <nav className={this.props.className}>
      <div>
        <NavLink activeClassName='is-active' onClick={this.props.toTop} exact to='/'>WHY BEES MATTER</NavLink>
        <NavLink activeClassName='is-active' onClick={this.props.toTop} to='/history-of-bees' >HISTORY OF BEES</NavLink>
        <NavLink activeClassName='is-active' onClick={this.props.toTop} to='/species-in-danger'>A SPECIES IN DANGER</NavLink>
        <div onClick={this.props.menuUpdate } className="icon" id="myMenuFunction">&#9776;</div>
      </div>          
    </nav>
    )    
  }
}