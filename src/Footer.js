import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {
toTop = () => {
  window.scrollTo(0, 0);
}

render(){
  return(
    <footer>
      <p>
          <Link onClick={this.toTop} to='/sources'>
          List of Sources</Link>
      </p>
      <p>Copyright © Andy Durette 2019</p>
    </footer>
    )
  }
}