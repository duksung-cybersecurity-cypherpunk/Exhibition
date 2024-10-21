import React from 'react';
import '../styles/Footer.css';
import Insta from '../assets/images/Icon/Insta.png';
import Github from '../assets/images/Icon/Github.png';
import Duksung from '../assets/images/Icon/Duksung.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerGroup">
        <div className="footerAddress">
          01369|서울 도봉구 삼양로144길 33 (쌍문동, 덕성여자대학교)|덕성여자대학교
          <br></br>02) 901-8677
          <br></br>Copyright (c) cybersec Language and Literature. All right reserved.
        </div>
        <div className="footerIcons">
          <a href="https://www.instagram.com/cypherpunk_dswu/" target="_blank" rel="noopener noreferrer">
            <img src={Insta} alt="Insta" className="footerIcon" />
          </a>
          <a href="https://github.com/duksung-cybersecurity-cypherpunk" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Gith" className="footerIcon" />
          </a>
          <a href="https://www.duksung.ac.kr/cybersec/main.do" target="_blank" rel="noopener noreferrer">
            <img src={Duksung} alt="Duks" className="footerIcon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
