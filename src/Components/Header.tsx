import React from 'react';
import './Header.scss';
import logo from '../assets/header/logo.svg';
import basket from '../assets/header/basket.svg';
import fav from '../assets/header/fav.svg';
import profile from '../assets/header/profile.svg';
import search from '../assets/header/search.svg';

const Header = () => {
  return (
    <div className='header-container'>
      <img src={logo} alt="tokhum" className='header-logo'/>
      <div className="navbar-section">
        <p>All products</p>
        <p>Indoor plants</p>
        <p>Outdoor plants</p>
        <p>Gifts</p>
        <p>Seeds</p>
        <p>Plant-care</p>
        <p>Pots</p>
      </div>
      <div className="profile-section">
        <img src={search} alt="search-logo" />
        <img src={fav} alt="favourite" />
        <img src={basket} alt="basket-logo" />
        <img src={profile} alt="profile-image" />
      </div>
    </div>
  )
}

export default Header
