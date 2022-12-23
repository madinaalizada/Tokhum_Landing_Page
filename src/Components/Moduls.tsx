import React from 'react';
import right1 from '../assets/right1.svg';
import right2 from '../assets/right2.svg';
import './Moduls.scss';

const Moduls = () => {
  return (
    <div className='moduls-container'>
      <div className="modul-container contain1">
        <div><img src={right1} alt="" /></div>
        <div id='modul-title'>Newbie with plants?<br/>Let us help you.</div>
        <p>{'If you are new with plants, let us help you. Wonder how? We will ask you a few quick questions and you are expected to answer them. You will get your plant(s) in no time. :)'}</p>
        <button>Find my plant</button>
      </div>
      <div className="modul-container contain2">
        <div><img src={right2} alt=""/></div>
        <div id='modul-title'>Customize your own designed pot<br/>with Tokhum</div>
        <p>{'Don’t like what we have in our stock? That’s ok, really... Create your own desired pot and let us put your favorite plant in it. Tokhum will always be there for your taste. :)'}</p>
        <button>More</button>
      </div>
    </div>
  )
}

export default Moduls
