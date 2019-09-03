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
import Footer from './Footer';



export default class App extends React.Component {

  /* Function to control weather the mobile menu is open or not. */
  constructor(props){
    super(props)
    this.state={
      /* State to control weather the mobile menu is open or not. */
      menuActive: false
      }
    }

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

    
    

  render(){
  return (
    <React.Fragment>
    <Router>
      {/* Nav added here to not be reloaded by page routing */}
    <Nav className={(this.state.menuActive === false ) ? "topnav" : "topnav mobile-menu"}  toTop={this.toTop} menuUpdate={this.menuUpdate} />
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
      {/* Footed added here to not be reloaded by page routing */}
    <Footer className={(this.state.menuActive === false ) ? "topnav" : "topnav mobile-menu"}  toTop={this.toTop} menuUpdate={this.menuUpdate} /> 
    </Router>
    </React.Fragment>
  );
}
}