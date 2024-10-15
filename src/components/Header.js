import React from 'react';
import '../styles/Header.css';  // CSS 파일 불러오기

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div class="hTitle">CypherPunk</div>
        <div class="hSubtitle">Duksung W.Univ Cyber Security 2nd Graduation Exhibition</div>
      </div>
      <nav className="navLinks">
        <a href="#about" className="about">About</a>
        <a href="#projects" className="projects">Projects</a>
        <a href="#guest-book" className="guest-book">Guest Book</a>
        <a href="#information" className="information">Information</a>
      </nav>
    </header>
  );
};

export default Header;
