"use client";

import { useAppState } from "@/store/hooks";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function InputAutoComplete() {
  const { names, allData } = useAppState();
  // log
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  const nameSelectCallback = (name: string) => {
    if (!names.includes(name)) return;
    setInputValue("");
    router.push(`/${name}`);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      nameSelectCallback(inputValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    const filteredSuggestions = names
      .filter((item) => item.trim().toLowerCase().startsWith(value))
      .sort((a, b) => allData[b].total - allData[a].total)
      .slice(0, 10);
    setSuggestions(filteredSuggestions);
  };
  return (
    <div
      className={`flex justify-center relative transition-all duration-1000 ease-in w-full max-w-[320px] mx-auto`}
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="הזינו שם פרטי..."
        className={`text-black z-50  w-full  h-14 ${
          inputValue ? "rounded-t-xl" : "rounded-xl"
        }  p-2  focus:outline-none text-right `}
        onKeyDown={handleKeyDown}
      />
      {inputValue && suggestions.length ? (
        <ol
          className={`h-[250%] overflow-auto w-full z-50 transition-all absolute -bottom-[250%] duration-500 ease-in  bg-white focus:border-2 border-white mx-auto space-y-1  ${
            inputValue ? "rounded-b-xl" : "rounded-xl"
          }`}
        >
          {suggestions.map((suggestion) => {
            return (
              <li key={suggestion} className="w-full">
                <button
                  className="flex gap-x-4 justify-between px-2 w-full hover:bg-gray-200 rounded transition"
                  onClick={() => nameSelectCallback(suggestion)}
                >
                  <span>{suggestion}</span>
                  <span className="text-gray-500">
                    {allData[suggestion]?.total}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      ) : null}
    </div>
  );
}

export default InputAutoComplete;
