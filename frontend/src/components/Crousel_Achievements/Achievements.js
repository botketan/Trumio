import React from 'react';
import './Achievements.css';
const Achievements = ({ heading, description, status, image, sparks, isFlex }) => {
    return (
        <div className={isFlex ? "thumbs-up-topper2 relative bg-white rounded-xl border border-neutral-200" : "thumbs-up-topper relative bg-white rounded-xl border border-neutral-200" }>
            <div className={ isFlex && "flex items-center justify-normal pb-4" }>
                <img src={image} alt="image" className='w-14 h-14 rounded-full'/>
                <div>
                    <p className={ isFlex ? "title2 text-moon-28 transition-colors" : "title text-moon-28 transition-color "}>{heading}</p>
                    <p className={ isFlex ? "description2 text-moon-16 transition-colors" : "description text-moon-16 transition-colors" }>{description}</p>
                </div>
            </div>
            { isFlex && <hr /> }
            <span className="sparks text-moon-8 transition-colors">{sparks}</span>
            <span className="days-left text-moon-8 transition-colors">{status}</span>
        </div>
    );
}

export default Achievements;