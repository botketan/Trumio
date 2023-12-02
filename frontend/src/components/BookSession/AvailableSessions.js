import { Carousel } from "@heathmont/moon-core-tw";
import React, { useState } from "react";
import TimeSlots from "./TimeSlots";

const AvailableSessions = (props) => {
  const times = props.times;
  const slots = props.slots;
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var fiveDays = [], dates = [], displayTimes = [];
  for (var i = 0; i < 5; i++) {
    var nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + i);
    dates.push(nextDay);
    fiveDays.push({
      weekday: daysOfWeek[nextDay.getDay()],
      day: nextDay.getDate(),
      month: monthName[nextDay.getMonth()],
    });
    // eslint-disable-next-line no-loop-func
    displayTimes.push(times.filter(time => {
        return time.getDate() === nextDay.getDate()
    }));
  }
  const [selected, setSelected] = useState(0);
  const items = Array.from({ length: 5 }, (index) => index);

  return (
    <div className="flex flex-col gap-4 shadow-md rounded-md w-80 p-4">
      <div className="text-moon-16 text-center text-trunks ">
        Available Mentorship Sessions
      </div>
      <div className="flex gap-1">
        {items.map((_, index) => (
          <div key={index} onClick={() => setSelected(index)} className={"px-1 w-16 h-16 shadow-md rounded-md hover:cursor-pointer" + ((selected===index)?" border-2":"")}>
              <p className="text-moon-9 text-center pt-1 text-green-700">
                {slots[index]} slots left
              </p>
              <p className="text-moon-10 text-center text-trunks">
                {fiveDays[index].weekday}
              </p>
              <p className="text-moon-12 text-center">
                {fiveDays[index].month} {fiveDays[index].day}
              </p>
          </div>
        ))}
      </div>
      <div className="text-moon-16 text-center text-trunks ">
        Available Time Slots
      </div>
      <hr className="border-moon-10"/>
      <Carousel step={1} selectedIndex={selected} className="w-[320px]">
        <Carousel.Reel>
          {items.map((_, index) => (
            <Carousel.Item key={index} className="w-80">
              <TimeSlots times={displayTimes[index]}/>
            </Carousel.Item>
          ))}
        </Carousel.Reel>
      </Carousel>
    </div>
  );
};

export default AvailableSessions;
