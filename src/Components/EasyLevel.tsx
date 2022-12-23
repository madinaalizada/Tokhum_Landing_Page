import './EasyLevel.scss';
import easylogo from '../assets/easylogo.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import f23 from '../assets/f23.svg';
import f24 from '../assets/f24.svg';
import f25 from '../assets/f25.svg';
import f26 from '../assets/f26.svg';

const EasyLevel = () => {
  return (
    <div className="easylevel-container">
      <div className="easylevel-header">
        <img src={easylogo} alt="" />
        <div className="easy-directions-logo">
            <img src={left} alt="" />
            <img src={right} alt="" />
        </div>
      </div>
      <div className="easylevel-body">
        <div className="easylevel-item">
            <img src={f23} alt="" />
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
            <img src={f24} alt="" />
            <div className="easylevel-item-context">
                <div id='item-title'>Rapunzel</div>
                <div id='item-cost'>132.00 ₼</div>
                <div className="item-sizes-container">
                    <div className="item-size-container">70-80cm</div>
                    <div className="item-size-container">90-100cm</div>
                    <div className="item-size-container">+1</div>
                </div>
                <button className='deactive-btn'>Out of stock</button>
            </div>
        </div>
        <div className="easylevel-item">
            <img src={f25} alt="" />
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
            <img src={f26} alt="" />
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

export default EasyLevel
