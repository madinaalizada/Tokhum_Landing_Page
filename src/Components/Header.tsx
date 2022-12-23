import './Header.scss';
import logo from '../assets/header/logo.svg';
import basket from '../assets/header/basket.svg';
import fav from '../assets/header/fav.svg';
import profile from '../assets/header/profile.svg';
import search from '../assets/header/search.svg';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
      <img src={logo} alt="tokhum" className='header-logo'/>
      <div className="navbar-section">
        <NavLink to='/' className='navbar-section-item'>All products</NavLink>
        <NavLink to='/' className='navbar-section-item'>Indoor plants</NavLink>
        <NavLink to='/' className='navbar-section-item'>Outdoor plants</NavLink>
        <NavLink to='/' className='navbar-section-item'>Gifts</NavLink>
        <NavLink to='/' className='navbar-section-item'>Seeds</NavLink>
        <NavLink to='/' className='navbar-section-item'>Plant-care</NavLink>
        <NavLink to='/' className='navbar-section-item'>Pots</NavLink>
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
