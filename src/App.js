import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends React.Component{
    render() {
      return (
          <Router>
              <Switch>
                  <div className="h1 text-center">
                      Hello World
                  </div>
              </Switch>
          </Router>
      );
    }

}

export default App;
