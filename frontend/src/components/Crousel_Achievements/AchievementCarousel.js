import React from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import Achievements from './Achievements.js';
import { ControlsChevronLeftSmall, ControlsChevronRightSmall } from '@heathmont/moon-icons-tw';

const AchievementCarousel = ({ items }) => {
    return (
        <Carousel step={3}>
          <Carousel.LeftArrow>
            <ControlsChevronLeftSmall />
          </Carousel.LeftArrow>
            <Carousel.Reel>
            {items.map((item, index) => (
              <Carousel.Item key={index}>
                <Achievements
                    key={index}
                    heading={item.heading}
                    description={item.description}
                    status={item.status}
                    image={item.image}
                />
              </Carousel.Item>
            ))}
            </Carousel.Reel>
            <Carousel.RightArrow>
              <ControlsChevronRightSmall />
            </Carousel.RightArrow>
      </Carousel>
    );
}

export default AchievementCarousel;