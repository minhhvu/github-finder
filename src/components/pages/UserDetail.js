import React from 'react';
import UserBioHeader from "../layout/UserBioHeader";
import UserReposList from "../layout/UserReposList";

class UserDetail extends React.Component{

    componentDidMount() {
        // console.log(this.props.match.params);
        this.props.onSingleUserChange(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <UserBioHeader user={this.props.singleUser}/>
                <UserReposList userRepos={this.props.userRepos}/>
            </div>
        )
    }
}

export default UserDetail;