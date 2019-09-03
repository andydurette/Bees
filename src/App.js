import React from 'react';
import './Normalize.css';
import './styles/App.scss';
import WhyBeesMatter from './WhyBeesMatter';
import HistoryOfBees from './HistoryOfBees';
import SpeciesInDanger from './SpeciesInDanger';
import Sources from './Sources';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import Nav from './Nav';



export default class App extends React.Component {

  render(){
  return (
    <React.Fragment>
    <Router >
    <Nav/>
      {/* Call location element so CSSTranstion renders transition between pages properly */}
      <Route render={({location}) =>(
         <TransitionGroup>
         <CSSTransition
           key={location.key}
           timeout={300}
           classNames="fade"
         >
         <Switch location={location}>
         <React.Fragment>
             <Route path="/" exact component={WhyBeesMatter} />
             <Route path="/history-of-bees" component={HistoryOfBees} />
             <Route path="/species-in-danger" component={SpeciesInDanger} />
             <Route path="/sources" component={Sources} />
             </React.Fragment>
         </Switch>
         </CSSTransition>
         </TransitionGroup>
      )} />
     
    </Router>
    
     </React.Fragment>
  );
}
}