import React from 'react';
import './Header.css';  // CSS 파일 불러오기

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
      <div class="header-content">
        <div class="title">CypherPunk</div>
        <div class="subtitle">Duksung W.Univ Cyber Security<br></br>2nd Graduation Exhibition</div>
      </div>
      </div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#guest-book">Guest Book</a>
        <a href="#information">Information</a>
      </nav>
    </header>
  );
};

export default Header;
