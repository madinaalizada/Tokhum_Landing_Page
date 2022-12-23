import './Footer.scss';
import logo from '../assets/header/logo.svg';
import call from '../assets/footer-logo/call.svg';
import facebook from '../assets/footer-logo/facebook.svg';
import insta from '../assets/footer-logo/insta.svg';
import mail from '../assets/footer-logo/mail.svg';
import tiktok from '../assets/footer-logo/tiktok.svg';
import twitter from '../assets/footer-logo/twitter.svg';
import usa from '../assets/footer-logo/usa.png';
import ru from '../assets/footer-logo/ru.png';


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="header">
        <img src={logo} alt="" />
        <select>
            <option>USA - English</option>
            <option>RU - Russian</option>
        </select>
      </div>
    </div>
  )
}

export default Footer;
