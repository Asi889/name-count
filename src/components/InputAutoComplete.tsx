import { AllNames } from "@/types/types";
import React, { ChangeEventHandler, KeyboardEventHandler } from "react";

function InputAutoComplete({
  inputValue,
  suggestions,
  data,
  handleClick,
  setInputFlag,
  handleChange,
  handleKeyDown,
}: {
  inputValue: string;
  suggestions: string[];
  data: AllNames;
  handleClick: Function;
  setInputFlag: Function;
  handleChange: Function;
  handleKeyDown: Function;
}) {
  return (
    <div
      className={`flex justify-center relative transition-all duration-1000 ease-in w-full max-w-[320px] mx-auto`}
    >
      <input
        type="text"
        onFocus={() => setInputFlag(true)}
        value={inputValue}
        onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
        placeholder="... הקלד שם כאן"
        className={`text-black z-50  w-full  h-14 ${
          inputValue ? "rounded-t-xl" : "rounded-xl"
        }  p-2  focus:outline-none text-right `}
        onKeyDown={handleKeyDown as KeyboardEventHandler<HTMLInputElement>}
      />
      {inputValue && (
        <div
          className={`h-[250%] overflow-auto w-full z-50 transition-all absolute -bottom-[250%] duration-500 ease-in  bg-white focus:border-2 border-white mx-auto  ${
            inputValue ? "rounded-b-xl" : "rounded-xl"
          }`}
        >
          {inputValue &&
            suggestions?.map((item: any) => {
              return (
                <div className="flex gap-x-4 justify-between px-2" key={item}>
                  <div className="text-gray-500">{data[item]?.total}</div>
                  <div className="" onClick={() => handleClick(item)}>
                    {item}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default InputAutoComplete;
