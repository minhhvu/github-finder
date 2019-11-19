import React, {Fragment} from 'react';
import {connect} from "react-redux";

const UserReposList = ({userRepos}) => {
    // const reposList = props.userRepos;
    console.log('userRepos')
    console.log(userRepos.data)
    // while (true) {
    //     if (!userRepos.isFetching) {
    //         break
    //     }
    // }
    let reposList = userRepos.data

    const ReposList = reposList.map((repos) =>
        <div className={'border rounded p-3 mt-3'}>
            <a href={repos.html_url} target="_blank" className={'mr-3'}>{repos.name}</a>
            <div>{repos.description}</div>
        </div>
    )

    return (
        <Fragment>
            {ReposList}
        </Fragment>
    )
}

const mapStateToProps = state => (
    {
        userRepos: state.userRepos
    }
)

export default connect(mapStateToProps)(UserReposList);