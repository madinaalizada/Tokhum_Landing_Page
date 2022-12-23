import './WhatCanBuy.scss';
import logo from '../assets/canbuylogo.svg';
import fr5 from '../assets/options/fr5.svg';
import fr6 from '../assets/options/fr6.svg';
import fr7 from '../assets/options/fr7.svg';
import fr8 from '../assets/options/fr8.svg';
import fr9 from '../assets/options/fr9.svg';
import fr10 from '../assets/options/fr10.svg';

const WhatCanBuy = () => {
  return (
    <div className='what-can-buy'>
      <img src={logo} alt="logo" />
      <div className="options-container">
        <img src={fr9} alt="" />
        <img src={fr7} alt="" />
        <img src={fr10} alt="" />
        <img src={fr5} alt="" />
        <img src={fr6} alt="" />
        <img src={fr8} alt="" />
      </div>
    </div>
  )
}

export default WhatCanBuy
