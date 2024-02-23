/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import TheChart from "./TheChart";
import ProgressBar from "./ProgressBar";
import NumberComponent from "./NumberComponent";

interface IData {
  first_name: string;
  // Add other fields from your JSON data if needed
}

const Autocomplete = ({ data }: any) => {
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");
  const [suggestions, setSuggestions] = useState<any>([]);
  const [mCount, setMCount] = useState(0);
  const [fCount, setFCount] = useState(0);
  const [percent, setPercent] = useState(percentSplit(mCount, fCount));

  function getUniqueNames(arr: any) {
    const uniqueNames = new Set();
    const result = [] as any[];

    arr.forEach((obj: any) => {
      if (obj.hasOwnProperty("first_name")) {
        const name = obj.first_name;
        if (!uniqueNames.has(name)) {
          uniqueNames.add(name);
          result.push(name);
        }
      }
    });

    return result;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    const uniqueNames = getUniqueNames(data);
    // Filter suggestions based on the input value
    const filteredSuggestions = uniqueNames.filter((item: any) =>
      item.toLowerCase().startsWith(value)
    );
    setSuggestions(filteredSuggestions);
  };

  const handleClick = (name: string, item?: any) => {
    setMCount(0);
    setFCount(0);
    setName(name);
    setInputValue("");
    const filteredData = data.filter((item: any) => item.first_name === name);
    const maleCount = filteredData.reduce(
      (acc: number, curr: any) =>
        curr.gender === "m" ? acc + Number(curr.from) : acc,
      0
    );
    const femaleCount = filteredData.reduce(
      (acc: number, curr: any) =>
        curr.gender === "f" ? acc + Number(curr.from) : acc,
      0
    );
    setMCount(maleCount);
    setFCount(femaleCount);
    setPercent(percentSplit(maleCount, femaleCount));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      handleClick(suggestions[0].first_name); // Assuming you want to select the first suggestion
    }
  };
  function percentSplit(num1: number, num2: number) {
    const total = num1 + num2;

    // const percent1 = ((num1 / total) * 100).toFixed(2) + "";
    // const percent2 = ((num2 / total) * 100).toFixed(2) + "";
    const percent1 = Math.round((num1 / total) * 100) + "";
    const percent2 = Math.round((num2 / total) * 100) + "";

    if (num1 === 0 && num2 === 0) {
      return [0, 0];
    }
    return [percent1, percent2];
  }

  return (
    <div className="max-w-4xl mx-auto z-50 opacity-100">
      <div className="felx justify-center w-full">
        <div className="w-full mx-auto relative flex gap-x-6">
          {/* <img
            src="https://media.giphy.com/media/xT4uQAvtDlvsx2ITkI/giphy.gif?cid=ecf05e47rzhfc494lcps7yswobhp2kvwyglctk8qyi32esxo&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt=""
            className="absolute h-[100px] w-[100px] object-fill z-0"
          /> */}
          <div className="w-full text-left">
            <NumberComponent value={mCount} />
            <ProgressBar
              male={true}
              bgcolor={"#458def"}
              completed={`${percent[0]}`}
            />
            <div className="text-center pt-2">{`\u2642`}</div>
          </div>
          <div className="w-full text-right">
            <NumberComponent value={fCount} />
            <ProgressBar
              male={false}
              bgcolor={"#eb67b8"}
              completed={`${percent[1]}`}
            />
            <div className="pt-2 text-center">{`\u2640`}</div>
          </div>
        </div>
      </div>
      <div className="h-14 flex items-center justify-center mt-4">
        {name && <h1 className=" text-xl">{name}</h1>}
      </div>
      <div className="grid justify-center w-full mx-auto">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          // placeholder="Type a name..."
          className="text-black   w-full  h-10 rounded-xl p-2 relative focus:border-blue-500 mt-10 text-right "
          onKeyDown={handleKeyDown}
        />

        <div className="h-full max-h-[300px] overflow-auto  w-full z-50  bg-white  mx-auto rounded-xl">
          <ul className={`z-50   ${inputValue ? "" : ""}`}>
            {inputValue &&
              suggestions?.map((item: any) => (
                <li
                  className="pt-2"
                  key={item}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Autocomplete;
