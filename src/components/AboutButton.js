import React, { useState } from 'react';
import '../styles/AboutButton.css';
import PrevIcon from "../assets/images/Icon/Polygon 4.png";
import NextIcon from "../assets/images/Icon/Polygon 3.png";

const AboutButton = ({ page, setPage }) => {
    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        } else if (page === 1) {
            setPage(5);
        }
    };

    const handleNext = () => {
        if (page < 5) {
            setPage(page + 1);
        } else if (page===5) {
            setPage(1);
        }
        
    };

    return (
        <div className="pagination">
            <button className="prev" onClick={handlePrev}>
                <img src={PrevIcon} alt="Previous" style={{ verticalAlign: 'middle', marginRight: '20px' }}/>
            </button>
            <span style={{ verticalAlign: 'middle', fontSize: '20px' }}>{page}/5</span>
            <button className="next" onClick={handleNext}>
                <img src={NextIcon} alt="Next" style={{ verticalAlign: 'middle', marginLeft: '20px' }}/>
            </button>
        </div>
    );
};

export default AboutButton;