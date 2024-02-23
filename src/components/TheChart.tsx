import React, { useState } from "react";

function TheChart({ m, f }: any) {
  function percentSplit(num1: number, num2: number) {
    // Calculate the total sum
    const total = num1 + num2;

    // Calculate percentage for each number
    const percent1 = ((num1 / total) * 100).toFixed(2) + "%";
    const percent2 = ((num2 / total) * 100).toFixed(2) + "%";
    console.log(percent1);

    // Return percentages as an array
    return [percent1, percent2];
  }
  const [data, setData] = useState<any>([]);
  const [male, setMale] = useState<number | any>(percentSplit(m, f)[0]);
  const [female, setFemale] = useState<number | any>(percentSplit(m, f)[1]);
  console.log(male);

  return (
    <div className="flex">
      <div
        className={`female-meter w-[500px] border-2 bg-neutral-200 border-black rounded-3xl`}
      >
        <div className={`h-6 bg-pink-300 w-1 rounded-3xl`}></div>
      </div>
      <div
        className={`male-meter w-[500px] border-2 bg-neutral-200 border-black rounded-3xl `}
      >
        <div
          className={`h-6 bg-blue-500 ${m ? male : "w-10"} rounded-3xl`}
        ></div>
      </div>
      <progress className="bg-red-200 text-red-300" value={0.5} />
      {/* <div className="mb-6 h-1 w-[500px] bg-neutral-200 dark:bg-neutral-600">
        <div
          className={`h-1 bg-pink-400 w-[20%] transition duration-700 delay-500`}
        ></div>
      </div>
      <div className="mb-6 h-1 w-[500px] bg-neutral-200 dark:bg-neutral-600">
        <div
          className={`h-1 bg-blue-500 w-[20%] transition duration-700 delay-500`}
        ></div>
      </div> */}
    </div>
  );
}

export default TheChart;
