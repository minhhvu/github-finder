import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from "./components/pages/About";
import Homepage from "./components/pages/Homepage";
import UserDetail from "./components/pages/UserDetail";
// import './App.css';
import Navbar from "./components/layout/Navbar";
import axios from "axios";

class App extends React.Component{

    // state = {
    //     keywords: '',
    //     users: [],
    //     singleUser: {},
    //     userRepos: [],
    //     loading: false,
    // };
    //
    // async componentDidMount() {
    //     //Initialize the users data
    //     let res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //     this.setState({users: res.data});
    // }
    //
    // handleKeywordsChange = (text) => {
    //     this.setState({keywords : text});
    //     // console.log(this.state.keywords);
    // }
    //
    // handleUsersChange = async () => {
    //     //Retrieve data from Github API
    //     this.setState({loading: true});
    //     const search = this.state.keywords !=='' ? this.state.keywords : 'minh'; //setup the 'minh' as the searching keywords
    //     let response = await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //
    //     this.setState({users : response.data.items, loading: false});
    //     // console.log(this.state.users);
    // }
    //
    // handleSingleUseChange = async (id) => {
    //     //Retrieve user infor from Github API
    //     this.setState({loading: true});
    //     let response = await axios.get(`https://api.github.com/users/${id}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //     this.setState({singleUser : response.data, loading: false});
    //
    //     //Retrieve user repositories
    //     this.setState({loading: true});
    //     response = await axios.get(`https://api.github.com/users/${id}/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //     this.setState({userRepos : response.data, loading: false});
    // }


    render() {
      return (
          <Router>
              <Navbar/>
              <Switch>
                  <Route exact path='/' render={props => (
                      <Homepage
                          // keywords={this.state.keywords}
                          // onKeywordsChange={this.handleKeywordsChange}
                          // onFormSubmit={this.handleUsersChange}
                          // onUserClick={this.handleSingleUseChange}
                          // users={this.state.users}
                      />
                  )}/>
                  <Route exact path={'/about'} component={About}/>
                  {/*<Route exact path={'/users/:id'} render={props => (*/}
                  {/*      <UserDetail*/}
                  {/*          {...props}*/}
                  {/*          singleUser={this.state.singleUser}*/}
                  {/*          userRepos={this.state.userRepos}*/}
                  {/*          onSingleUserChange={this.handleSingleUseChange}*/}
                  {/*          loading={this.state.loading}*/}
                  {/*      />*/}
                  {/*    )}/>*/}
              </Switch>
          </Router>
      );
    }

}

export default App;
