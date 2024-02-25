import React from "react";

function InputAutoComplete(props: any) {
  const { inputValue, handleChange, suggestions, handleKeyDown, handleClick } =
    props;
  return (
    <div className="grid justify-center w-fit mx-auto relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="... הקלד שם כאן"
        className={`text-black   w-full  h-10 ${
          inputValue ? "rounded-t-xl" : "rounded-xl"
        }  p-2 relative focus:outline-none mt-10 text-right `}
        onKeyDown={handleKeyDown}
      />
      {inputValue && (
        <div
          className={`h-full max-h-[300px] overflow-auto w-full z-50 absolute -bottom-[100%]  bg-white focus:border-2 border-white mx-auto  ${
            inputValue ? "rounded-b-xl" : "rounded-xl"
          }`}
        >
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
      )}
    </div>
  );
}

export default InputAutoComplete;
