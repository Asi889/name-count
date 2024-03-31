"use client";

import { AllNames } from "@/types/types";
import { useSearchParams } from "next/navigation";
import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useState,
} from "react";

function InputAutoComplete({
  data,
  handleNameSelect,
  names,
}: {
  names: string[];
  data: AllNames;
  handleNameSelect: (name: string) => void;
}) {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<[string] | []>([]);

  const nameSelectCallback = (name: string) => {
    if (!names.includes(name)) return;
    handleNameSelect(name);
    setInputValue("");
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      nameSelectCallback(inputValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    const filteredSuggestions = names.filter((item) =>
      item.toLowerCase().startsWith(value)
    );
    setSuggestions(filteredSuggestions as [string]);
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
        onKeyDown={handleKeyDown as KeyboardEventHandler<HTMLInputElement>}
      />
      {inputValue ? (
        <ol
          className={`h-[250%] overflow-auto w-full z-50 transition-all absolute -bottom-[250%] duration-500 ease-in  bg-white focus:border-2 border-white mx-auto  ${
            inputValue ? "rounded-b-xl" : "rounded-xl"
          }`}
        >
          {inputValue &&
            suggestions?.map((suggestion) => {
              return (
                <li
                  className="flex gap-x-4 justify-between px-2"
                  key={suggestion}
                >
                  <span
                    className=""
                    onClick={() => nameSelectCallback(suggestion)}
                  >
                    {suggestion}
                  </span>
                  <span className="text-gray-500">
                    {data[suggestion]?.total}
                  </span>
                </li>
              );
            })}
        </ol>
      ) : null}
    </div>
  );
}

export default InputAutoComplete;
