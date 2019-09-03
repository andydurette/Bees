import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {

/* Function to keep copyright using the correct years */
    getYear = () => {
     return new Date().getFullYear();
    }
  

render(){
  return(
    <footer>
      <p>
          <Link  onClick={this.props.toTop} to='/sources'>
          List of Sources</Link>
      </p>
      <p>Copyright © Andy Durette <span>{this.getYear()}</span></p>
    </footer>
    )
  }
}