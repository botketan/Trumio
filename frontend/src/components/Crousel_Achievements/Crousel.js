import React from 'react';
import '../../index.css';
import { Carousel } from '@heathmont/moon-core-tw';
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from '@heathmont/moon-icons-tw';
import Achievements from './Achievements';

const Crousel = ({ items }) => {
    return (
        <Carousel>
        {() => (
          <>
            <Carousel.LeftArrow>
              <ControlsChevronLeftSmall />
            </Carousel.LeftArrow>
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
            <Carousel.RightArrow>
              <ControlsChevronRightSmall />
            </Carousel.RightArrow>
          </>
        )}
      </Carousel>
    );
}

export default Crousel;