import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>01369| 서울 도봉구 상암로144길 33 (쌍문동, 덕성여자대학교) 덕성여자대학교
        <br></br>02) 901-8677
        <br></br>Copyright (c) cybersec Language and Literature. All rights reserved.
        </p>
    
      </div>
      <div className="footer-icons">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="" alt="Instagram" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="github-icon.png" alt="GitHub" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="custom-icon.png" alt="Custom" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
