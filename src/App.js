import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from "./components/pages/About";
import Homepage from "./components/pages/Homepage";
import UserDetail from "./components/pages/UserDetail";
import Navbar from "./components/layout/Navbar";
import {fetchGetUser} from "./actions";
import {connect} from 'react-redux'

const  App = ({dispatch}) => {

      return (
          <Router>
              <Navbar/>
              <Switch>
                  <Route exact path='/' component={Homepage}/>
                  <Route exact path={'/about'} component={About}/>
                  <Route exact path={'/users/:id'}
                         render={props => {
                             fetchGetUser(props.match.params.id)(dispatch)
                             return <UserDetail/>
                         }}
                  />

              </Switch>
          </Router>
      );

}

export default connect()(App);
