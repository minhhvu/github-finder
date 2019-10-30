import React from 'react';
import {Fragment} from 'react';
import SearchForm from "../layout/SearchForm";
import UsersGrid from "../layout/UsersGrid";
import axios from 'axios';

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keywords: '',
            users: [],
            loading: false,
        };
    }

    async componentDidMount() {
        //Initialize the users data
        let res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({users: res.data});
    }

    handleKeywordsChange = (text) => {
        this.setState({keywords : text});
        // console.log(this.state.keywords);
    }

    handleUsersChange = async () => {
        //Retrieve data from Github API
        this.setState({loading: true});
        const search = this.state.keywords !=='' ? this.state.keywords : 'minh'; //setup the 'minh' as the searching keywords
        let response = await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({users : response.data.items, loading: false});
        // console.log(this.state.users);
    }

    render() {
        return (
            <Fragment>
                <SearchForm
                    keywords={this.state.keywords}
                    onKeywordsChange={this.handleKeywordsChange}
                    onFormSubmit={this.handleUsersChange}
                />
                <UsersGrid
                    users={this.state.users}
                    // keywords={this.state.keywords}
                />
            </Fragment>
        );
    }
}

export default Homepage;