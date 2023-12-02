import React from 'react';
import './Achievements.css';
import { Carousel } from '@heathmont/moon-core-tw';
import Achievements from './Achievements.js';

const AchievementCarousel = ({ items }) => {
    return (
        <Carousel>
        {() => (
          <>
            <Carousel.Reel>
            {items.map((item, index) => (
                <Achievements
                    key={index}
                    heading={item.heading}
                    description={item.description}
                    status={item.status}
                    image={item.image}
                />
            ))}
            </Carousel.Reel>
          </>
        )}
      </Carousel>
    );
}

export default AchievementCarousel;