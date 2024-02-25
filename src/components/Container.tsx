/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { getUniqueNames, percentSplit } from "../utils/functions";
import BothBars from "./BothBars";
import InputAutoComplete from "./InputAutoComplete";
import { ContainerPropsAll, Person } from "@/types/types";

const Container = ({ data }: any) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [suggestions, setSuggestions] = useState<[string] | any>([]);
  const [mCount, setMCount] = useState<number>(0);
  const [fCount, setFCount] = useState<number>(0);
  const [percent, setPercent] = useState(percentSplit(mCount, fCount));
  const [chartData, setChartData] = useState<any>([]);

  function processObject(obj: Person) {
    const chartData = [];

    for (const key in obj[0]) {
      if (!isNaN(obj[0][key])) {
        const year = parseInt(key);
        const amount = obj[0][key];
        chartData.push({ data: year, label: amount });
      }
    }
    setChartData(chartData);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    const uniqueNames = getUniqueNames(data);
    const filteredSuggestions = uniqueNames.filter((item) =>
      item.toLowerCase().startsWith(value)
    );
    setSuggestions(filteredSuggestions);
  };

  const handleClick = (name: string) => {
    setMCount(0);
    setFCount(0);
    setName(name);
    setInputValue("");
    const filteredData = data.filter(
      (item: Person) => item.first_name === name
    );
    const maleCount = filteredData.reduce(
      (acc: number, curr: Person) =>
        curr.gender === "m" ? acc + Number(curr.from) : acc,
      0
    );
    const femaleCount = filteredData.reduce(
      (acc: number, curr: Person) =>
        curr.gender === "f" ? acc + Number(curr.from) : acc,
      0
    );
    processObject(filteredData);
    setMCount(maleCount);
    setFCount(femaleCount);
    setPercent(percentSplit(maleCount, femaleCount));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      const filteredData = data.filter(
        (item: Person) => item.first_name === inputValue
      );

      handleClick(filteredData.first_name);
    }
  };

  return (
    <div className="max-w-4xl mx-auto z-50 opacity-100">
      <InputAutoComplete
        inputValue={inputValue}
        handleChange={handleChange}
        suggestions={suggestions}
        handleKeyDown={handleKeyDown}
        handleClick={handleClick}
      />
      <div className="felx justify-center w-full">
        <BothBars mCount={mCount} fCount={fCount} percent={percent} />
      </div>
      <div className="h-14 flex items-center justify-center mt-4">
        {name && <h1 className=" text-xl">{name}</h1>}
      </div>
      <div className=" overflow-x-auto">
        {/* {chartData && <Chart chartData={chartData} />} */}
      </div>
    </div>
  );
};

export default Container;
