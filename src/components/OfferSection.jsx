import React from 'react';
import {
  FaMobile,
  FaFigma,
  FaLaptopCode,
  FaRegHandshake,
} from 'react-icons/fa';
import { FaBookTanakh } from 'react-icons/fa6';

import '../styles/globals.css';

const WORK_INFO = [
  {
    id: 1,
    title: 'Mobile App Development',
    icon: <FaMobile size={'2rem'} />,
    description:
      'Crafting intuitive and high-performing mobile applications for iOS and Android, tailored to meet user needs and business goals.',
  },
  {
    id: 2,
    icon: <FaLaptopCode size={'2rem'} />,
    title: 'Web Development',
    description:
      'Building responsive and dynamic websites with cutting-edge technologies to enhance user experience and drive engagement.',
  },
  {
    id: 3,
    icon: <FaFigma size={'2rem'} />,
    title: 'UI-UX Designer (Figma)',
    description:
      'Designing user-centric interfaces and seamless experiences in Figma, focusing on usability and aesthetic appeal.',
  },
  {
    id: 4,
    icon: <FaRegHandshake size={'2rem'} />,
    title: 'App Consultant',
    description:
      'Providing expert guidance on app strategy, design, and development to optimize functionality and user satisfaction.',
  },
  {
    id: 5,
    icon: <FaBookTanakh size={'2rem'} />,
    title: 'Research and Development',
    description:
      'Innovating and exploring new technologies to drive forward-thinking solutions and continuous improvement in software development.',
  },
  {
    id: 6,
    icon: <FaFigma size={'2rem'} />,
    title: 'Project Management',
    description:
      'Leading projects from concept to completion, ensuring timely delivery, budget adherence, and alignment with client objectives.',
  },
];

const OfferSection = () => {
  return (
    <div className="offer-container">
      <div className="title">
        <p>My Activities</p>
        <div className="under-line"></div>
      </div>
      <div className="work-container">
        {WORK_INFO.map(({ id, title, description, icon }) => (
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
