import React from "react";

function DashedBorder() {
  return (
    <div className="w-full h-full grid absolute">
      <div className="w-full h-full border-t-[1px]  border-dashed"></div>
      <div className="w-full h-full border-t-[1px] border-black border-dashed"></div>
      <div className="w-full h-full border-t-[1px] border-black border-dashed"></div>
      <div className="w-full h-full border-t-[1px] border-black border-dashed"></div>
      <div className="w-full h-full border-t-[1px] border-black border-dashed"></div>
      <div className="w-full h-full border-t-[1px] border-black border-dashed"></div>
    </div>
  );
}

export default DashedBorder;
