import React from 'react';

const UsersGrid = (props) => {
    const listUsers = props.users.map((user) =>
        <div className={'border rounded p-2 mb-3'} style={{width: '12rem'}}>
            <img src={user.avatar_url} className={"card-img-top"} alt={user.login}/>
            <div className={'text-center'}>
                <div className={'h5 card-title'}>{user.login}</div>
                <div className={''}>more ...</div>
            </div>
        </div>
    );
    return (
        <div className={'d-flex flex-row flex-wrap justify-content-sm-between justify-content-center'}>
            {listUsers}
        </div>
    );
}

export default UsersGrid;