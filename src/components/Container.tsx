/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { percentSplit } from "../utils/functions";
import BothBars from "./BothBars";
import InputAutoComplete from "./InputAutoComplete";
import { AllNames, Percent } from "@/types/types";
import { useSearchParams } from "next/navigation";
import BackGroundImages from "./BackGroundImages";
import TheChart from "./TheChart";

const Container = ({ data, names }: { data: AllNames; names: string[] }) => {
  const searchParams = useSearchParams();

  const setName = (value: string) => {
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?name=${value}`
    );
  };
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<[string] | []>([]);
  const [mCount, setMCount] = useState<number>(0);
  const [fCount, setFCount] = useState<number>(0);
  const [percent, setPercent] = useState<Percent | []>([]);
  const [inputFlag, setInputFlag] = useState<boolean>(false);
  const [secondeInputFlag, setSecondeInputFlag] = useState<boolean>(false);
  const nameParam = searchParams.get("name") ?? "";
  const [selectedName, setSelectedName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondeInputFlag(true);
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    const filteredSuggestions = names.filter((item) =>
      item.toLowerCase().startsWith(value)
    );
    setSuggestions(filteredSuggestions as [string]);
  };

  const handleClick = (name: string) => {
    setName(name);
    setSelectedName(name);
    const menCount = data[name ? name : inputValue]?.male?.count ?? 0;
    const womenCount = data[name ? name : inputValue]?.female?.count ?? 0;
    setMCount(menCount);
    setFCount(womenCount);
    setPercent(percentSplit(menCount, womenCount) as Percent);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      handleClick(inputValue);
    }
  };

  useEffect(() => {
    if (nameParam) {
      setInputValue(nameParam);
      setInputFlag(true);
      setSecondeInputFlag(true);
      handleClick(nameParam);
    }
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <BackGroundImages fCount={fCount} mCount={mCount} />
      <div className="max-w-4xl mx-auto opacity-100 z-[99999px] relative h-1/2">
        <div>
          <h1 className="text-3xl">הכנס שם</h1>
          <p>הזינו את השם הפרטי שלכם וקבלו עליו מידע</p>
        </div>
        <div
          className={`grid items-end transition-all duration-1000 ease ${
            inputFlag ? "h-[20%]" : "h-5/6"
          }`}
        >
          <InputAutoComplete
            data={data}
            inputValue={inputValue}
            handleChange={handleChange}
            suggestions={suggestions}
            handleKeyDown={handleKeyDown}
            handleClick={handleClick}
            setInputFlag={setInputFlag}
          />
        </div>
        <div>
          <div
            className={` justify-center w-11/12 h-[500px] mx-auto relative  z-40 bg-slate-500 bg-opacity-50 rounded-lg pt-10 mt-10 p-2 grid ${
              secondeInputFlag ? "opacity-100" : "opacity-0"
            } transition-all duration-1000 ease-in`}
          >
            <div className="h-full">
              <BothBars percent={percent} />
            </div>
            <div className="h-full">
              text
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              tt
            </div>
            <TheChart chartData={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
