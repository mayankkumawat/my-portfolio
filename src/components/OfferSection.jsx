import React from 'react';
import { Constants } from '@/constants/constants';

import '../styles/globals.css';

const OfferSection = () => {
  return (
    <div className="offer-container">
      <div className="title">
        <p>My Activities</p>
        <div className="small-under-line" />
        <div className="under-line" />
      </div>
      <div className="work-container">
        {Constants.WORK_INFO.map(({ id, title, description, icon }) => (
          <div key={id} className="work-item">
            <div>{icon}</div>
            <div className="work-info">
              <p className="work-title">{title}</p>
              <div className="work-description">{description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
