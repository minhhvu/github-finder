import React, {Fragment} from 'react';

const UserReposList = (props) => {
    const reposList = props.userRepos;
    console.log(reposList);

    const ReposList = reposList.map((repos) =>
        <div className={'border rounded p-3 mt-3'}>
            <a href={repos.html_url} target="_blank" className={'mr-3'}>{repos.name}</a>
            <div>{repos.description}</div>
        </div>
    );

    return (
        <Fragment>
            {ReposList}
        </Fragment>
    )
}

export default UserReposList;