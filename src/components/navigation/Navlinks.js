import React from 'react';
import { Link } from 'react-router-dom';

const Navlinks = props => {
    let tempTabIndex;
    if (props.isMobileLink) {
        tempTabIndex = '-1'
    }
    return (
        <ul className='nav-links'>
            <li>
                <Link to='/Projects' className='link' tabIndex = { tempTabIndex }>Home</Link>
            </li>
            <li>
                <Link to='/SignOut' className='link' tabIndex = { tempTabIndex }>Sign out</Link>
            </li>
            <li>
                <Link to='/Task' className='link' tabIndex = { tempTabIndex }>Task</Link>
            </li>
            <li>
                <Link to='Graphics' className='link' tabIndex = { tempTabIndex }> Graphics</Link>
            </li>
        </ul>
    )
}

export default Navlinks;