import React, { useState, useEffect } from 'react';
import { FaVideo } from 'react-icons/fa';

function Timer() {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-05-11') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Handle the case where timeLeft is undefined
    const hours = timeLeft?.hours?.toString().padStart(2, '0');
    const minutes = timeLeft?.minutes?.toString().padStart(2, '0');
    const seconds = timeLeft?.seconds?.toString().padStart(2, '0');

    return (
        <div className='timers-div'>
           <a style={{ width: "300px"  }} href='https://calendly.com/metablock-sale' target='_blank'>
            <div className="card-formsess">
              <FaVideo className='video-icon' />
              Schedule Free 30-minute Meeting
            </div>
          </a>
        </div>
    );
}

export default Timer;