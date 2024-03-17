import { Percent } from "@/types/types";
import { useSearchParams } from "next/navigation";
import React from "react";

function TheChart({ chartData }: { chartData: any }) {
  // const chartData= ""
  const searchParams = useSearchParams();
  const nameParam = searchParams.get("name") ?? ("" as any);

  const femaleData =
    chartData[nameParam]?.female != null
      ? chartData[nameParam]?.female.amounts
      : [];

  const maleData =
    chartData[nameParam]?.male != null
      ? chartData[nameParam]?.male.amounts
      : [];

  const years = Array.from(
    { length: 2021 - 1948 + 1 },
    (_, index) => 1948 + index
  );

  return (
    <div className="max-w-[500px] w-full max-h-600 md:max-w-[700px] md:max-h-400 overflow-x-scroll h-full mx-auto bg-white   ">
      <div className="flex h-full">
        {years.reverse().map((year, index) => {
          const height1 = `${
            maleData.length > 0
              ? `${(maleData[maleData.length - (index + 1)] / 600) * 100}px`
              : "0px"
          }`;

          const height2 = `${
            femaleData.length > 0
              ? `${(femaleData[femaleData.length - (index + 1)] / 600) * 100}px`
              : "0px"
          }`;
          return (
            <div
              key={index}
              className="flex flex-col items-center   justify-end w-full"
            >
              <div className="flex gap-x-1 justify-end items-end border-b-2 w-full border-black px-5">
                {maleData.length > 0 && (
                  <div className="grid justify-items-center">
                    <div className="h-36 w-3 relative rounded-t-2xl overflow-hidden">
                      <div
                        style={{ height: height1 }}
                        className="w-full bg-[#0099FF] rounded-t-2xl bottom-0 border-inherit absolute transition-all duration-1000 ease-in-out"
                      />
                    </div>
                  </div>
                )}
                {femaleData.length > 0 && (
                  <div className="grid justify-items-center">
                    <div className="h-36 w-3 relative rounded-t-2xl overflow-hidden">
                      <div
                        style={{ height: height2 }}
                        className="w-full  bg-[#FA2469] rounded-t-2xl bottom-0 border-inherit absolute transition-all duration-1000 ease-in-out"
                      ></div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`w-full flex gap-x-2 justify-center  border-r-[1px] border-black`}
              >
                {maleData.length > 0 && (
                  <h2 className="text-[10px] font-medium">
                    {maleData[maleData.length - (index + 1)]}
                  </h2>
                )}
                {femaleData.length > 0 && (
                  <h2 className="text-[10px] font-medium">
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
