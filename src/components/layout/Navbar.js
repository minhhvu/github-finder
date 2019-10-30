import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={'navbar navbar-expand-sm navbar-dark bg-danger'} style={{color: 'white'}}>

            <Link to={'/'}>
                <div className={'navbar-brand'}>Github Finder</div>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className={'navbar-nav'}>
                    <li className={'nav-item'}>
                        <Link to={'/'}><span className={'nav-link'}>Homepage</span></Link>
                    </li>

                    <li className={'nav-item'}>
                        <Link to={'/about'}><span className={'nav-link'}>About</span></Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;