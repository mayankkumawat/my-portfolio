import React from 'react';

import '../styles/globals.css';
import { FaMobile } from 'react-icons/fa';

const WORK_INFO = [];

const OfferSection = () => {
  return (
    <div className="offer-container">
      <div className="title">
        <p>My Activities</p>
        <div className="under-line"></div>
      </div>
      <div className="work-container">
        <div className="work-item">
          <div>
            <FaMobile size={'2rem'} />
          </div>
          <div className="work-info">
            <p className="work-title">title</p>
            <div className="work-description">description</div>
          </div>
        </div>
        <div className="work-item">
          <div>
            <FaMobile size={'2rem'} />
          </div>
          <div className="work-info">
            <p className="work-title">title</p>
            <div className="work-description">description</div>
          </div>
        </div>
        <div className="work-item">
          <div>
            <FaMobile size={'2rem'} />
          </div>
          <div className="work-info">
            <p className="work-title">title</p>
            <div className="work-description">description</div>
          </div>
        </div>
        <div className="work-item">
          <div>
            <FaMobile size={'2rem'} />
          </div>
          <div className="work-info">
            <p className="work-title">title</p>
            <div className="work-description">description</div>
          </div>
        </div>
        <div className="work-item">
          <div>
            <FaMobile size={'2rem'} />
          </div>
          <div className="work-info">
            <p className="work-title">title</p>
            <div className="work-description">description</div>
          </div>
        </div>
        <div className="work-item">
          <div>
            <FaMobile size={'2rem'} />
          </div>
          <div className="work-info">
            <p className="work-title">title</p>
            <div className="work-description">description</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
