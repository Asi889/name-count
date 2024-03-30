import React from "react";

function SingleBar({ height1, type }: { height1: string; type: string }) {
  return (
    <div className="grid justify-items-center">
      <div className="h-36 w-3 relative rounded-t-2xl overflow-hidden">
        <div
          style={{ height: height1 }}
          className={` ${
            type === "male" ? "bg-[#0099FF]" : "bg-[#FA2469]"
          } w-full  rounded-t-2xl bottom-0 border-inherit absolute transition-all duration-1000 ease-in-out`}
        />
      </div>
    </div>
  );
}

export default SingleBar;
