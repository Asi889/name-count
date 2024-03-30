"use client";
import { AllNames } from "@/types/types";
import { highestNumber } from "@/utils/functions";
import { useSearchParams } from "next/navigation";
import DashedBorder from "./DashedBorder";
import SingleBar from "./SingleBar";

function TheChart({ chartData }: { chartData: AllNames }) {
  const searchParams = useSearchParams();
  const nameParam = searchParams.get("name") ?? ("" as string);

  const femaleData =
    chartData[nameParam]?.female != null
      ? chartData[nameParam]?.female?.amounts
      : ([] as number[] | any);

  const maleData =
    chartData[nameParam]?.male != null
      ? chartData[nameParam]?.male?.amounts
      : ([] as number[] | any);

  const heighest =
    maleData.length > 0 || femaleData.length > 0
      ? highestNumber([...maleData, ...femaleData]) || 0
      : 0;

  const years = Array.from(
    { length: 2021 - 1948 + 1 },
    (_, index) => 1948 + index
  );

  return (
    <div className="max-w-[500px] w-full max-h-600 md:max-w-[700px] md:max-h-400 overflow-x-scroll h-full mx-auto bg-white ">
      <div className="flex h-full w-full relative">
        {years.reverse().map((year, index) => {
          const hh =
            maleData.length > 0 || femaleData.length > 0
              ? highestNumber([...maleData, ...femaleData]) || 0
              : 0;
          const height1 = `${
            maleData?.length > 0
              ? `${
                  (maleData[maleData.length - (index + 1)] / heighest) * 100
                }px`
              : "0px"
          }`;

          const height2 = `${
            femaleData?.length > 0
              ? `${
                  (femaleData[femaleData.length - (index + 1)] / heighest) * 100
                }px`
              : "0px"
          }`;
          return (
            <div
              key={index}
              className="flex flex-col items-center   justify-end w-full h-full"
            >
              <div className="flex gap-x-1 justify-end items-end border-b-2 w-full border-black px-5 h-full relative">
                <DashedBorder />
                {maleData.length > 0 && (
                  <SingleBar height1={height1} type="male" />
                )}
                {femaleData.length > 0 && (
                  <SingleBar height1={height2} type="female" />
                )}
              </div>
              <div
                className={`w-full flex gap-x-2 justify-center  border-r-[1px] border-black`}
              >
                {maleData.length > 0 && (
                  <h2 className="text-[11px] font-bold text-[#0099FF]">
                    {maleData[maleData.length - (index + 1)]}
                  </h2>
                )}
                {femaleData.length > 0 && (
                  <h2 className="text-[11px] font-bold text-[#FA2469]">
                    {femaleData[femaleData.length - (index + 1)]}
                  </h2>
                )}
              </div>

              <div className="text-xs py-1 font-semibold">{year}</div>
            </div>
          );
        })}
        <div className="w-full h-1 "></div>
      </div>
    </div>
  );
}

export default TheChart;
