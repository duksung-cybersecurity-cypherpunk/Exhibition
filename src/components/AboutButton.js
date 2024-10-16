import React, { useState } from 'react';
import '../styles/AboutButton.css';
import PrevIcon from "../assets/images/Icon/Polygon 4.png";
import NextIcon from "../assets/images/Icon/Polygon 3.png";

const AboutButton = ({ page, setPage }) => {
    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNext = () => {
        if (page < 5) {
            setPage(page + 1);
        }
    };

    return (
        <div className="pagination">
            <button className="prev" onClick={handlePrev}>
                <img src={PrevIcon} alt="Previous" />
            </button>
            <span>{page}/5</span>
            <button className="next" onClick={handleNext}>
                <img src={NextIcon} alt="Next" />
            </button>
        </div>
    );
};

export default AboutButton;