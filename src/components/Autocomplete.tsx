"use client";
import React, { useState } from "react";
import Chart from "./Chart";

interface IData {
  first_name: string;
  // Add other fields from your JSON data if needed
}

const Autocomplete = ({ data }: any) => {
  // console.log(data);

  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");
  const [suggestions, setSuggestions] = useState<any>([]);
  const [suggestionsData, setSuggestionsData] = useState<any>([]);
  const [d, setD] = useState<any>();
  const [mCount, setMCount] = useState(0);
  const [fCount, setFCount] = useState(0);

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

  function processObjectArray(arr: any) {
    let numberKeys = [] as any[];
    let keyValues = [] as any[];

    arr.map((obj: any) => {
      Object.keys(obj).forEach((key: any) => {
        if (!isNaN(key)) {
          numberKeys.push(key);
        }
        keyValues.push(isNaN(obj[key]) ? 0 : obj[key]);
      });
    });
    // console.log(keyValues);

    return { numberKeys, keyValues };
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    const uniqueNames = getUniqueNames(data);
    // const noDuplicates =
    // Filter suggestions based on the input value
    const filteredSuggestions = uniqueNames.filter((item: any) =>
      item.toLowerCase().startsWith(value)
    );
    setSuggestions(filteredSuggestions);
  };

  const handleClick = (name: string, item?: any) => {
    // processObjectArray(data);
    // console.log(name);
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
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      handleClick(suggestions[0].first_name); // Assuming you want to select the first suggestion
    }
  };

  return (
    <div className="w-fit mx-auto z-50 opacity-100">
      <div>
        <Chart m={mCount} f={fCount} />
      </div>
      {name && <h1 className="pb-10 text-xl">{name}</h1>}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a name..."
        className="text-black border-2 border-black w-full h-10 rounded-md p-2 relative focus:border-blue-500 "
        onKeyDown={handleKeyDown}
      />
      <div className="h-full max-h-[300px] overflow-auto w-full z-50">
        <ul className="z-50">
          {inputValue &&
            suggestions?.map((item: any) => (
              <li key={item} onClick={() => handleClick(item)}>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Autocomplete;
