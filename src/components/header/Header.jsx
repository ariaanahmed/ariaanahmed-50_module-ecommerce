import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <div className='navbar'>
                <a href="/order">order</a>
                <a href="/shop">shop</a>
                <a href="/inventory">inventory</a>
                <a href="/login">login</a>
            </div>
        </nav>
    );
};

export default Header;