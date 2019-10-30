import React from 'react';
import {Fragment} from 'react';
import SearchForm from "../layout/SearchForm";
import UsersGrid from "../layout/UsersGrid";

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keywords: '',
            users: {},
        };
    }

    handleKeywordsChange = (text) => {
        this.setState({keywords : text});
        // console.log(this.state.keywords);
    }

    handleUsersChange = () => {
        //Retrieve data from Github API
        let res = {exam: 'submitform'};

        this.setState({users : res});
        // console.log(this.state.keywords);
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
                    keywords={this.state.keywords}
                />
            </Fragment>
        );
    }
}

export default Homepage;