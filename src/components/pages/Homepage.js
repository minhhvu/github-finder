import React from 'react';
import {Fragment} from 'react';
import SearchForm from "../../containers/SearchForm";
import UsersGrid from "../layout/UsersGrid";

class Homepage extends React.Component{

    render() {
        return (
            <Fragment>
                <SearchForm
                    // keywords={this.props.keywords}
                    // onKeywordsChange={this.props.onKeywordsChange}
                    // onFormSubmit={this.props.onFormSubmit}
                />
                <UsersGrid
                    // users={this.props.users}
                    // onUserClick={this.props.handleSingleUseChange}
                />
            </Fragment>
        );
    }
}

export default Homepage;