import React from 'react';
import LoginHeader from './LoginHeader/LoginHeader';
import MainHeader from './MainHeader/MainHeader';

const Header = () => {
    return (
        <>
            <MainHeader/>       
            <LoginHeader/>
        </>
    );
}

export default Header;