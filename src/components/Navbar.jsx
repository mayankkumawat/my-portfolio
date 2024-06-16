import React from 'react';
import Link from 'next/link';

import '../styles/globals.css';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Link href="/" className="logo">
          Mayank
          <span className="portfolio-text">Kumawat</span>
        </Link>
      </div>
      <div className="links-container">
        <div>
          <Link href="/" className="links">
            About me
          </Link>
        </div>
        <div>
          <Link href="/" className="links">
            Resume
          </Link>
        </div>
        <div>
          <Link href="/" className="links">
            Works
          </Link>
        </div>
        <div>
          <Link href="/" className="links">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
