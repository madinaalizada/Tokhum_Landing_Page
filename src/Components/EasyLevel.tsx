import './EasyLevel.scss';
import easylogo from '../assets/easylogo.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';

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
    </div>
  )
}

export default EasyLevel
