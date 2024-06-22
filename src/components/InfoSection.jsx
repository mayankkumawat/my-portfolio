'use client';
import React from 'react';
import Image from 'next/image';
import { cabin } from '@/styles/fonts';
import TypeWriter from '@/components/TypeWriter';
import { Constants } from '@/constants/constants';

import profilePic from '../assets/profilepic.jpeg';

const InfoSection = () => {
  const handleClickGithub = () => window.open(Constants.LINKS.github, '_blank');
  return (
    <div className="info-container">
      <div className="info">
        <TypeWriter />
        <p className={`info-name ${cabin.className}`}>Mayank Kumawat</p>
        <p className={`info-career ${cabin.className}`}>
          More than 10 projects of experience in the field of Web and Mobile
          Applications development on all phases of the Software development
          cycle using React JS, React Native, JavaScript, HTML5, CSS3, and
          Bootstrap.🌐💻
          <br />
          <br />
          🔍 Working knowledge with bug tracking system and source control
          (GIT).
          <br />
          <br />
          🧠✨ Also good in problem solving, teamwork, time management, and
          communication skills.
          <br />
          <br />
          📋⚙️ Competence to follow production process and technical
          specifications.
        </p>
        <div className="btn-container">
          <button className={`btn ${cabin.className}`}>Resume</button>
          <button className={`btn ${cabin.className}`}>Meet</button>
          <button className={`btn ${cabin.className}`}>Contact</button>
          <button
            className={`btn ${cabin.className}`}
            onClick={handleClickGithub}
          >
            Github
          </button>
        </div>
      </div>
      <div className="profile-container">
        <Image
          src={profilePic}
          className="profile-pic"
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default InfoSection;
