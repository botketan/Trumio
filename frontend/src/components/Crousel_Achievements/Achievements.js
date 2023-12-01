import React from 'react';
import '../../index.css';
const Achievements = ({ heading, description, status, image }) => {
    return (
        <div className="thumbs-up-topper">
            
                <div className="image-container">
                    <img src={image} alt="image" />
                </div>
            
            <p className="title text-moon-28 transition-color">{heading}</p>
            <p className="description text-moon-16 transition-colors">{description}</p>
            <span className="days-left text-moon-8 transition-colors">{status}</span>
        </div>
    );
}

export default Achievements;
