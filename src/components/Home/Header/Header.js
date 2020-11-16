import React from 'react';
import AppBar from '../../shared/NavBar/AppBar';
import HouseSearch from './HouseSearch/HouseSearch';

const Header = () => {
    return (
        <>
         <AppBar />
         <HouseSearch />
        </>
    );
};

export default Header;