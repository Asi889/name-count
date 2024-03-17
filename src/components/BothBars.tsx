import React from "react";
import NumberComponent from "./NumberComponent";
import ProgressBar from "./ProgressBar";
import { Percent } from "@/types/types";

function BothBars({ percent }: { percent: Percent }) {
  const malePercent = `${Number(percent[0]) - 100}%`;
  const femalePercent = `${Number(percent[1]) - 100}%`;
  const fillerStyles = {
    height: "100%",
    width: percent[0] > percent[1] ? `110%` : `100%`,
    position: "absolute",
    transition: "all 1s ease-in-out",
    backgroundColor: "#0099FF",
    borderRadius: "inherit",
    left: percent[0] ? malePercent : "-100%",
    zIndex: percent[0] > percent[1] ? `999` : `1`,
  } as any;

  const fillerStylesFemale = {
    height: "100%",
    width: percent[1] > percent[0] ? `110%` : `100%`,
    position: "absolute",
    transition: "all 1s ease-in-out",
    backgroundColor: "#FA2469",
    borderRadius: "inherit",
    right: percent[1] ? femalePercent : "-100%",
    zIndex: percent[1] > percent[0] ? `999` : `1`,
  } as any;

  return (
    <div className="w-full max-w-[320px] mx-auto h-14 border-[1px] border-black rounded-xl relative grid text-center overflow-x-hidden">
      <NumberComponent
        value={
          Number(percent[1]) > Number(percent[0])
            ? Number(percent[1])
            : Number(percent[0])
        }
      />
      {/* <span className="z-[999999] text-2xl font-semibold grid justify-center items-center">
        {percent[1] > percent[0] ? percent[1] : percent[0]}
      </span> */}
      <div style={fillerStyles}></div>
      <div style={fillerStylesFemale}></div>
    </div>
  );
}

export default BothBars;
