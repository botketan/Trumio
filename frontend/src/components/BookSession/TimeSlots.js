import { Button } from '@heathmont/moon-core-tw';
import React from 'react';

const TimeSlots = (props) => {

    const displayTimes = props.times;
    const closeModal = props.closeModal;

    const handleClick = (e) => {
        alert(
            "Congratulations on booking 10 sessions. You gained 100 sparks and levelled up!"
        );
        closeModal();
    };

    return (
        <div className='w-80 flex flex-wrap'>
            {
                displayTimes.map((time, index) => (
                    <div key={index}>
                        <Button className="text-moon-12 border rounded float-left m-1 w-20" onClick={handleClick}>
                            {time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}
                        </Button>
                    </div>
                ))
            }
        </div>
    );
};

export default TimeSlots;
