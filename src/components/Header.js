import React, { useState } from 'react';
import '../styles/Header.css';
import {Link} from "react-router-dom";

const Header = () => {
  const [selectedLink, setSelectedLink] = useState('');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  }

  return (
    <header className="header">
      <div className="logo">
        <Link className="headerTitle" to="/" onClick={() => handleLinkClick("")}>CypherPunk</Link>
        <div className="headerSubtitle">Duksung W.Univ Cyber Security 2nd Graduation Exhibition</div>
      </div>
      <div className="navLinks">
        <Link to="/" title="About"
           className={`navLink ${selectedLink === 'about' ? 'active' : ''}`}
           onClick={() => handleLinkClick('about')}>
          About
        </Link>

        <Link to="/projects" title="Projects"
          className={`navLink ${selectedLink === 'project' ? 'active' : ''}`}
          onClick={() => handleLinkClick('project')}>
          Projects
        </Link>

        <Link to="/guestbook" title="Guest Book"
          className={`navLink ${selectedLink === 'guest-book' ? 'active' : ''}`}
          onClick={() => handleLinkClick('guest-book')}>
          Guest Book
        </Link>

        <Link to="/information" title="Information"
          className={`navLink ${selectedLink === 'information' ? 'active' : ''}`}
          onClick={() => handleLinkClick('information')}>
          Information
        </Link>
      </div>
    </header>
  );
};

export default Header;
