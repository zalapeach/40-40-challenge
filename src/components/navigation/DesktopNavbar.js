import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';
import mobileNavIcon from '../../images/icons8-chevron-down-64.png'

const MyDesktopNavbar = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    background: ${ props => props.theme.primary };
    color: black;
    height: 15vh;

    .logo {
        font-size: 7vh;
    }

    .nav-links {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;
        width: 35vw;
        list-style: none;

        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .link {
        
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        height: 15vh;
        padding: 0 1rem;
        color: black;
        font-size: 2.5vh;
        text-decoration: none;
        border-radius: 10px;

        &:focus {
            background: rgba(0, 0, 0, 0.1);
            outline: none;
        }

        &::after {
            content: '';
            height: 2px;
            width: 0px;
            background: black;
            display: block;
            transition: width .3s;
        }

        &:hover::after {
            transform: width;
            width: 125%;
        }
    }
`

const MyMobileNavButton = styled.button`
    background: transparent;
    height: 6vh;
    width: 6vh;
    border: none;
    display: none;
    transition: transform .5s ease-in-out;
    transform: rotate(${ props => props.displayMobileNavbar ? ('-90deg') : ('90deg') });

    @media screen and (max-width: 768px) {
        display: block;
    }
`
const DesktopNavbar = props => {
    return (
        <MyDesktopNavbar>
            <div className='logo'>4040Apps</div>

            <Navlinks />
    
            <MyMobileNavButton
                displayMobileNavbar = { props.displayMobileNavbar }
                onClick = { props.toggleMobileNavbar }
            >
                <img src={mobileNavIcon} alt='nav icon'/>
            </MyMobileNavButton>
        
        </MyDesktopNavbar>
    )
}

export default DesktopNavbar;