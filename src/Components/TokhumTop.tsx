import React from 'react';
import './TokhumTop.scss';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';

const TokhumTop = () => {
  return (
    <div className='tokhum-top20-container'>
        <div className="tokhum-top20-header">
            <p>Tokhum’s top 20</p>
            <div className="direction-logos">
                <img src={left} alt="" />
                <img src={right} alt="" />
            </div>
        </div>
        <div className="top20-images-container">
            <div className="top20-image-item">
                <img src={image1} alt="" />
                <div className="item-content">

                </div>
            </div>
            <div className="top20-image-item">
                <img src={image2} alt="" />
                <div className="item-content">
                    
                </div>
            </div>
            <div className="top20-image-item">
                <img src={image3} alt="" />
                <div className="item-content">
                    
                </div>
            </div>
            <div className="top20-image-item">
                <img src={image4} alt="" />
                <div className="item-content">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default TokhumTop
