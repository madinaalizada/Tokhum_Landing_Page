import './Subscribe.scss';
import scribble from '../assets/scribble.svg';
import sendlogo from '../assets/sendlogo.svg';

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <div className="subscribe-context">
        <p>Subscribe <br/>to get the latest<br/>updates from Tokhum</p>
        <p className='info'>{'How to recieve updates from Tokhum? When we say updated we mean new products, new categories, new features... Just drop your email and we will take care of the rest. :)'}</p>
        <div className="send-email">
            <input type="email" name="" id="" placeholder='Email address'/>
            <img src={sendlogo} alt="" />
        </div>
      </div>
      <img src={scribble} alt="" />
    </div>
  )
}

export default Subscribe
