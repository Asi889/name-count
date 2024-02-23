import React, { useState, useEffect } from "react";

interface NumberComponentProps {
  value: number;
}

const NumberComponent: React.FC<NumberComponentProps> = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const diff = value - currentValue;
    const step = Math.sign(diff) * Math.ceil(Math.abs(diff) / 10);
    const duration = 500; // Animation duration in milliseconds
    const steps = Math.ceil(duration / 16); // Number of steps to complete the animation in 500ms

    let currentStep = 0;
    const interval = setInterval(() => {
      setCurrentValue((prevValue) => {
        currentStep++;
        if (currentStep >= steps) {
          clearInterval(interval);
          return value;
        }
        return prevValue + step;
      });
    }, duration / steps);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="number-component">
      <span>{currentValue}</span>
    </div>
  );
};

export default NumberComponent;
