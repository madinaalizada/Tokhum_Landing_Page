import logo from '../assets/officelogo.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import './OfficePlants.scss';
import f11 from '../assets/officeplants/fr11.svg';
import f12 from '../assets/officeplants/fr12.svg';
import f13 from '../assets/officeplants/fr13.svg';
import f14 from '../assets/officeplants/fr14.svg';

const OfficePlants = () => {
  return (
    <div className="officeplants-container">
      <div className="header">
        <img src={logo} alt="" />
        <div className="directions">
            <img src={left} alt="" />
            <img src={right} alt="" />
        </div>
      </div>
      <div className="easylevel-body">
        <div className="easylevel-item">
            <img src={f11} alt="" />
            <div className="easylevel-item-context">
                <div id='item-title'>Rapunzel</div>
                <div id='item-cost'>132.00 ₼</div>
                <div className="item-sizes-container">
                    <div className="item-size-container">70-80cm</div>
                    <div className="item-size-container">90-100cm</div>
                    <div className="item-size-container">+1</div>
                </div>
                <button className='active-btn'>Add to basket</button>
            </div>
        </div>
        <div className="easylevel-item">
            <img src={f12} alt="" />
            <div className="easylevel-item-context">
                <div id='item-title'>Rapunzel</div>
                <div id='item-cost'>132.00 ₼</div>
                <div className="item-sizes-container">
                    <div className="item-size-container">70-80cm</div>
                    <div className="item-size-container">90-100cm</div>
                    <div className="item-size-container">+1</div>
                </div>
                <button className='active-btn'>Add to basket</button>
            </div>
        </div>
        <div className="easylevel-item">
            <img src={f13} alt="" />
            <div className="easylevel-item-context">
                <div id='item-title'>Rapunzel</div>
                <div id='item-cost'>132.00 ₼</div>
                <div className="item-sizes-container">
                    <div className="item-size-container">70-80cm</div>
                </div>
                <button className='active-btn'>Add to basket</button>
            </div>
        </div>
        <div className="easylevel-item">
            <img src={f14} alt="" />
            <div className="easylevel-item-context">
                <div id='item-title'>Rapunzel</div>
                <div id='item-cost'>132.00 ₼</div>
                <div className="item-sizes-container">
                    <div className="item-size-container">70-80cm</div>
                    <div className="item-size-container">90-100cm</div>
                    <div className="item-size-container">+1</div>
                </div>
                <button className='active-btn'>Add to basket</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OfficePlants
