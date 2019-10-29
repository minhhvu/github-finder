import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from "./components/pages/About";
import SearchingHomepage from "./components/pages/SearchingHomepage";
import './App.css';
import Navbar from "./components/layout/Navbar";

class App extends React.Component{
    render() {
      return (
          <Router>
              <Navbar/>
              <Switch>
                  <Route exact path='/' component={SearchingHomepage}/>
                  <Route exact path={'/about'} component={About}/>
              </Switch>
          </Router>
      );
    }

}

export default App;
