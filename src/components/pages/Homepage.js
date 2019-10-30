import React from 'react';
import {Fragment} from 'react';
import SearchForm from "../layout/SearchForm";
import UsersGrid from "../layout/UsersGrid";
import axios from 'axios';

class Homepage extends React.Component{

    render() {
        return (
            <Fragment>
                <SearchForm
                    keywords={this.props.keywords}
                    onKeywordsChange={this.props.onKeywordsChange}
                    onFormSubmit={this.props.onFormSubmit}
                />
                <UsersGrid
                    users={this.props.users}
                />
            </Fragment>
        );
    }
}

export default Homepage;