'use client';
import React from 'react';
import Image from 'next/image';
import { cabin } from '@/styles/fonts';
import TypeWriter from '@/components/TypeWriter';

import profilePic from '../assets/profilepic.jpeg';

const InfoSection = () => {
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
          <div className="btn">
            <p className={`info-btn ${cabin.className}`}>Resume</p>
          </div>
          <div className="btn">
            <p className={`info-btn ${cabin.className}`}>Meet</p>
          </div>
          <div className="btn">
            <p className={`info-btn ${cabin.className}`}>Contact</p>
          </div>
          <div className="btn">
            <p className={`info-btn ${cabin.className}`}>Github</p>
          </div>
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
