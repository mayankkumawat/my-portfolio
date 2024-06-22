'use client';
import Link from 'next/link';
import { cabin } from '@/styles/fonts';
import React, { useState } from 'react';
import { TbMenu2 } from 'react-icons/tb';
import { IoClose } from 'react-icons/io5';
import { Constants } from '@/constants/constants';

import '../styles/globals.css';

const Navbar = () => {
  const [selected, setSelected] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);
  const _handleClick = (item) => () => {
    setSelected(item);
    setIsMenuOpen(false);
  };
  return (
    <nav className="nav-container">
      <div className="logo-sub-container">
        <Link href="/" className={`logo ${cabin.className}`}>
          Mayank
          <span className={`portfolio-text ${cabin.className}`}>Kumawat</span>
        </Link>
        <div className="menu-icon" onClick={handleMenu}>
          {isMenuOpen ? (
            <IoClose size={'1.5rem'} strokeWidth={2} />
          ) : (
            <TbMenu2 strokeWidth={2} size={'1.5rem'} />
          )}
        </div>
        <div className={`links-container ${isMenuOpen ? 'open' : ''} `}>
          {Constants.NAVBAR_LINKS.map((item, i) => (
            <Link
              href={`/${item}`}
              key={`${item}${i}`}
              onClick={_handleClick(item)}
              className={`links ${selected === item && 'selected'} ${
                cabin.className
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
