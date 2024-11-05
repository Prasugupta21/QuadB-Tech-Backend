import React from 'react';
import { useState, useEffect } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Header = () => {
    const [timerProgress, setTimerProgress] = useState(60);
    const [timerPercentage, setTimerPercentage] = useState(100);
    useEffect(() => {
        const timer = setInterval(() => {
          setTimerProgress((prevProgress) => {
            if (prevProgress === 0) {
              setTimerPercentage(100);
              return 60;
            } else {
              setTimerPercentage((prevPercentage) => prevPercentage - (100 / 60));
              return prevProgress - 1;
            }
          });
        }, 1000);
        return () => clearInterval(timer);
      }, []);
    return (
        <header className="bg-[#191d28] py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-[#3dc6c1] text-4xl font-bold">HODLINFO</div>
                <Button />
          <div className="flex items-center gap-4">
           
            

            <div className="relative w-12 h-12">
              <div className="absolute inset-0 flex items-center justify-center">
                {timerProgress}
              </div>
              <div
                className="absolute inset-0 rounded-full border-4 border-[#3dc6c1]"
                style={{
                  transform: `rotate(-90deg)`,
                  transition: 'transform 1s linear',
                  transform: `rotate(${(timerPercentage / 100) * 360 - 90}deg)`,
                }}
              />
            </div>
            
                <Link to={'/connect'}><button className="bg-[#3dc6c1] text-[#191d28] px-4 py-2 rounded"> Connect Telegram</button></Link>
             
            
          </div>
        </div>
      </header>
    );
};

export default Header;