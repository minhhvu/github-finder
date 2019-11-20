import React from 'react';
import {Fragment} from 'react';
import SearchForm from "../../containers/SearchForm";
import UsersGrid from "../layout/UsersGrid";

class Homepage extends React.Component{

    render() {
        return (
            <Fragment>
                <SearchForm/>
                <UsersGrid/>
            </Fragment>
        );
    }
}

export default Homepage;