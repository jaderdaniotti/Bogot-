// src/components/PromoBanner.jsx
import React, { useEffect, useState } from "react";
const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 13,
    hours: 2,
    minutes: 18,
  });

  // Simulazione countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes } = prev;

        if (minutes > 0) {
          minutes--;
        } else {
          minutes = 59;
          if (hours > 0) {
            hours--;
          } else {
            hours = 23;
            days = days > 0 ? days - 1 : 0;
          }
        }
        return { days, hours, minutes };
      });
    }, 60000); // ogni minuto

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="promobanner">
      <div className="rectangle"></div>
      <span className="promo-text">SPECIAL PROMO</span>
      <span className="promo-time">        {timeLeft.days}g : {timeLeft.hours.toString().padStart(2, "0")}h :{" "}
        {timeLeft.minutes.toString().padStart(2, "0")}m</span>
    </div>
  );
};

export default PromoBanner;
