import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component {

/* Nav retrieves functions from App.js then using props sends response back through onClick */
render(){
    return(
    <nav className={this.props.className}>
      <button onClick={this.props.menuUpdate } className="icon js-focus-visible" id="myMenuFunction">

        <svg className="inline-svg" version="1.1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 23.5 25" enableBackground="new 0 0 23.5 25">
					<title>Mobile Menu</title>
					<g className="svg-menu-toggle">
					<path className="bar" d="M20.945,8.75c0,0.69-0.5,1.25-1.117,1.25H3.141c-0.617,0-1.118-0.56-1.118-1.25l0,0c0-0.69,0.5-1.25,1.118-1.25h16.688C20.445,7.5,20.945,8.06,20.945,8.75L20.945,8.75z">
					</path>
					<path className="bar" d="M20.923,15c0,0.689-0.501,1.25-1.118,1.25H3.118C2.5,16.25,2,15.689,2,15l0,0c0-0.689,0.5-1.25,1.118-1.25 h16.687C20.422,13.75,20.923,14.311,20.923,15L20.923,15z">
					</path>
					<path className="bar" d="M20.969,21.25c0,0.689-0.5,1.25-1.117,1.25H3.164c-0.617,0-1.118-0.561-1.118-1.25l0,0
						c0-0.689,0.5-1.25,1.118-1.25h16.688C20.469,20,20.969,20.561,20.969,21.25L20.969,21.25z">
					</path>
				
          <rect fill="none">
					</rect>
					</g>
		    </svg>
      </button>
      <div>
        <NavLink activeClassName='is-active' onClick={this.props.toTop} exact to='/'>WHY BEES MATTER</NavLink>
        <NavLink activeClassName='is-active' onClick={this.props.toTop} to='/history-of-bees' >HISTORY OF BEES</NavLink>
        <NavLink activeClassName='is-active' onClick={this.props.toTop} to='/species-in-danger'>A SPECIES IN DANGER</NavLink>
      </div>          
    </nav>
    )    
  }
}