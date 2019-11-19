import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const UserBioHeader = ({user}) => {
    const profileUser = user.data;
    console.log('user infor')
    console.log(user)

    const Header = () => (
        <div className={''}>
            <Link to={'/'}>
                <div className={'btn btn-light'}>Back to Search</div>
            </Link>
            <span className={'a btn ml-3'} disabled>Hireable</span>
            <span></span>
        </div>
    );

    const FollowingBar = () => (
        <div className={'border rounded p-3 mt-3 text-center'}>
            <span className={'ml-3 mr-3 p-1 rounded bg-secondary'}>Followers: {profileUser.followers}</span>
            <span className={'ml-3 mr-3 p-1 rounded bg-warning'}>Following: {profileUser.following}</span>
            <span className={'ml-3 mr-3 p-1 rounded bg-success'}>Public Repos: {profileUser.public_repos}</span>
            <span className={'ml-3 mr-3 p-1 rounded bg-danger'}>Public Gists: {profileUser.public_gists}</span>
        </div>
    )

    const BioProfile = () => (
        <div className={'d-flex border rounded p-3 mt-3'}>
            <div className={'col-sm-6 text-center'}>
                <img className={'img-fluid rounded-lg'} src={profileUser.avatar_url} alt={profileUser.name} style={{width: '10rem'}}/>
                <div className={'h5 mt-3'}>{profileUser.name}</div>
                <div>Location: {profileUser.location}</div>
            </div>
            <div className={'col-sm-6'}>
                <div className={'h5'}>Bio</div>
                <p>{profileUser.bio}</p>
                <a href={profileUser.html_url} className={'btn btn-secondary mt-3 mb-3'} target="_blank">Visit Github Profile</a>
                <div>Blog: {profileUser.blog}</div>
                <div>Company: {profileUser.company}</div>
            </div>
        </div>
    )

    return (
        <Fragment>
            <Header/>
            <BioProfile/>
            <FollowingBar/>
        </Fragment>
    )
}

const mapStateToProps = state => (
    {
        user: state.user
    }
)

export default connect(mapStateToProps)(UserBioHeader);