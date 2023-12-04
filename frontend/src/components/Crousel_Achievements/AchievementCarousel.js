import React from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import Achievements from './Achievements.js';
import { ControlsChevronLeftSmall, ControlsChevronRightSmall } from '@heathmont/moon-icons-tw';


const AchievementCarousel = ({ items }) => {
    return (
        <Carousel step={1}>
          <Carousel.LeftArrow className='w-12 h-12 p-3 ml-2 bg-white rounded-full shadow border border-neutral-200 justify-center items-center inline-flex'>
            <ControlsChevronLeftSmall />
          </Carousel.LeftArrow>
            <Carousel.Reel>
            {items.map((item, index) => (
              <Carousel.Item key={index}>
                <Achievements
                    key={index}
                    heading={item.heading}
                    description={item.description.slice(0,40)+"..."}
                    status={item.status}
                    image={item.image}
                    sparks={item.sparks}
                    isFlex={false}
                />
              </Carousel.Item>
            ))}
            </Carousel.Reel>
            <Carousel.RightArrow className='w-12 h-12 p-3 mr-2 bg-white rounded-full shadow border border-neutral-200 justify-center items-center inline-flex'>
            <ControlsChevronRightSmall />
            </Carousel.RightArrow>
      </Carousel>
    );
}

export default AchievementCarousel;