import React from 'react';
import img1 from '../assets/links/f5.svg';
import img2 from '../assets/links/f6.svg';
import img3 from '../assets/links/f7.svg';
import img4 from '../assets/links/f8.svg';
import logo1 from '../assets/cp_logo.svg';
import logo2 from '../assets/cli_logo.svg';
import logo3 from '../assets/leaf_logo.svg';
import logo4 from '../assets/guide_logo.svg';

import './FirstPage.scss';
const FirstPage = () => {
  return (
    <div className='firstpage-container'>
        <div className="first-part">
            <div className="exploaring-div">
                <p id='header'>Your eco-friendly plant store</p>
                <p id='header-subtitle'>Tokhum helps the society get to know the idea of eco-friendly products, sustainability, and aestheticism through a variety of greens</p>
                <button id='btn-start'>Start exploring</button>
            </div>
            <img src={img3} alt="image" />
        </div>
        <div className="second-part">
            <img src={img1} alt="" id='first'/>
            <img src={img2} alt="" id='second'/>
            <img src={img4} alt="" id='third'/>
        </div>
        <div className="headers-container">
            <div className="header-item">
                <img src={logo1} alt="img" />
                <p id='h1'>Customizable pots</p>
            </div>
            <div className="header-item">
                <img src={logo2} alt="img" />
                <p id='h2'>Clear instructions</p>
            </div>
            <div className="header-item">
                <img src={logo3} alt="img" />
                <p id='h3'>Full eco-friendly mindset</p>
            </div>
            <div className="header-item">
                <img src={logo4} alt="img" />
                <p id='h4'>Easy guide to plant-caring</p>
            </div>
        </div>
    </div>
  )
}

export default FirstPage
