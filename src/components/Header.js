import React, { useState } from 'react';
import '../styles/Header.css';  // CSS 파일 불러오기

const Header = () => {
  const [selectedLink, setSelelctedLink] = useState('');

  const handleLinkClick = (link) => {
    setSelelctedLink(link);
  }

  return (
    <header className="header">
      <div className="logo">
        <div class="headerTitle">CypherPunk</div>
        <div class="headerSubtitle">Duksung W.Univ Cyber Security 2nd Graduation Exhibition</div>
      </div>
      
      <nav className="navLinks">
        <a href="#about"
          className={`navLink ${selectedLink === 'about' ? 'active' : ''}`}
          onClick={() => handleLinkClick('about')}>
          About
        </a>

        <a href="#about"
          className={`navLink ${selectedLink === 'about' ? 'active' : ''}`}
          onClick={() => handleLinkClick('about')}>
          Projects
        </a>

        <a href="#guest-book"
          className={`navLink ${selectedLink === 'guest-book' ? 'active' : ''}`}
          onClick={() => handleLinkClick('guest-book')}>
          Guest Book
        </a>

        <a href="#information"
          className={`navLink ${selectedLink === 'information' ? 'active' : ''}`}
          onClick={() => handleLinkClick('information')}>
          Information
        </a>
      </nav>
    </header>
  );
};

export default Header;
