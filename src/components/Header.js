import React, {useState} from 'react';
import '../styles/Header.css';
import {Link} from "react-router-dom";
import {isMobile} from "react-device-detect";

const Header = ({headerHandler}) => {
    const [selectedLink, setSelectedLink] = useState('');

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    }

    return (
        <>
            <header className={isMobile ? "mobileHeader" : "header"}>
                <div className="logo">
                    <Link className={isMobile ? "mobileHeaderTitle" : "headerTitle"} to="/"
                          onClick={() => handleLinkClick("")}>CypherPunk</Link>
                    {isMobile
                        ? <div
                            className="mobileHeaderSubtitle">{"Duksung Women's University\nCyber Security 2nd Graduation Exhibition"}</div>
                        : <div className="headerSubtitle">Duksung W.Univ Cyber Security 2nd Graduation Exhibition</div>
                    }

                </div>
                {isMobile
                    ? <button className="headerMenuBtn" onClick={() => headerHandler(true)}>
                        <img className="headerMenuImg" src={require("../assets/images/Icon/HeaderMenu.png")} alt="menuBtn"/>
                        </button>
                    : <div className="navLinks">
                        <Link to="/about" title="About"
                              className={`navLink ${selectedLink === 'about' ? 'active' : ''}`}
                              onClick={() => handleLinkClick('about')}>
                            About
                        </Link>

                        <Link to="/projects" title="Projects"
                              className={`navLink ${selectedLink === 'project' ? 'active' : ''}`}
                              onClick={() => handleLinkClick('project')}>
                            Projects
                        </Link>

                        <Link to="/guest" title="Guest Book"
                              className={`navLink ${selectedLink === 'guest-book' ? 'active' : ''}`}
                              onClick={() => handleLinkClick('guest-book')}>
                            Guest Book
                        </Link>

                        <Link to="/info" title="Information"
                              className={`navLink ${selectedLink === 'information' ? 'active' : ''}`}
                              onClick={() => handleLinkClick('information')}>
                            Information
                        </Link>
                    </div>
                }
            </header>
        </>
    );
};

export default Header;
