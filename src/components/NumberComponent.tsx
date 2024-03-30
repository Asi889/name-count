import React, { useState, useEffect } from "react";

interface NumberComponentProps {
  value: number;
}

const NumberComponent: React.FC<NumberComponentProps> = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let targetValue = value;
    if (targetValue < 0) targetValue = 0;
    if (targetValue > 99) targetValue = 99;

    const increment = targetValue > currentValue ? 1 : -1;
    const interval = setInterval(() => {
      setCurrentValue((prevValue) => {
        if (prevValue === targetValue) {
          clearInterval(interval);
        }
        return prevValue + increment;
      });
    }, 5);

    return () => clearInterval(interval);
  }, [value]);
  return (
    <div className="number-component z-[99999] text-2xl font-semibold grid justify-center items-center">
      <span>{Math.round(currentValue)}%</span>
    </div>
  );
};

export default NumberComponent;
