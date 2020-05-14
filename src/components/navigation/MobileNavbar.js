import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';

const MyMobileNavbar = styled.nav`

    width: 40vh;
    background: ${ props => props.theme.primary };
    align-self: flex-end;
    transition: transform .5s;
    transform: translateX( ${ props => props.displayMobileNavbar ? ("0%") : ("100%") } );

    @media screen and (min-width: 768px) {
        display: none;
    }

    .nav-links {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items: center;
        height: 85vh;
        list-style: none;
    }

    .link {
        color: black;
        font-size: 2.5vh;
        text-decoration: none;
    }
`

const MobileNavbar = props => {
    return (
        <MyMobileNavbar displayMobileNavbar = { props.displayMobileNavbar }>  
            <Navlinks isMobileLink = { true } />
        </MyMobileNavbar>
    )
}

export default MobileNavbar;