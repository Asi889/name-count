/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useMemo, useState } from "react";
import { percentSplit, setName } from "../utils/functions";
import BothBars from "./BothBars";
import InputAutoComplete from "./InputAutoComplete";
import { AllNames, Percent } from "@/types/types";
import { useSearchParams } from "next/navigation";
import BackGroundImages from "./BackGroundImages";
import TheChart from "./TheChart";

const FrontPage = ({ data, names }: { data: AllNames; names: string[] }) => {
  const searchParams = useSearchParams();
  const nameParam = searchParams.get("name") ?? "";
  const menCount = data[nameParam]?.male?.count ?? 0;
  const womenCount = data[nameParam]?.female?.count ?? 0;
  const percent = percentSplit(menCount, womenCount);

  const returnChart = useMemo(() => {
    return <TheChart chartData={data} />;
  }, [nameParam, data]);

  return (
    <div className="w-full h-full relative">
      <BackGroundImages fCount={womenCount} mCount={menCount} />
      <div className="max-w-4xl mx-auto opacity-100 z-[99999px] relative h-full py-4">
        <div>
          {nameParam}
          <h1 className="text-3xl">הכנס שם</h1>
          <p>הזינו את השם הפרטי שלכם וקבלו עליו מידע</p>
        </div>
        <div
          className={`grid items-end transition-all duration-1000 ease ${
            !!nameParam ? "h-[10%]" : "h-1/2"
          }`}
        >
          <InputAutoComplete
            data={data}
            handleNameSelect={(name) => {
              setName(name);
            }}
            names={names}
          />
        </div>
        <div>
          <div
            className={` justify-center w-11/12 h-[470px] mx-auto relative  z-40 bg-slate-500 bg-opacity-50 rounded-lg pt-10 mt-10 p-2 grid ${
              !!nameParam ? "opacity-100" : "opacity-0"
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
            {returnChart}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
