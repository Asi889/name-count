"use client";
import React, { use, useEffect, useState } from "react";
import { BarChart, BarPlot } from "@mui/x-charts/BarChart";
import { ChartContainer } from "@mui/x-charts";
import { useSearchParams } from "next/navigation";

export default function Chart(chartData: any, name: string) {
  const searchParams = useSearchParams();
  const nameParam = searchParams.get("name") ?? ("" as any);
  const nn = nameParam.length > 0 ? nameParam : name;

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const femaleData =
    chartData.chartData[nn]?.female != null
      ? chartData.chartData[nn]?.female.amounts
      : uData;

  const maleData =
    chartData.chartData[nn]?.male != null
      ? chartData.chartData[nn]?.male.amounts
      : pData;

  const xables =
    chartData.chartData[nn]?.female != null
      ? chartData.chartData[nn]?.female.allYears
      : chartData.chartData[nn]?.male.allYears;

  return (
    <div className="w-full px-5 flex justify-center overflow-visible mt-40">
      <BarChart
        width={700}
        height={300}
        series={[
          { data: femaleData, id: "pvId" },
          { data: maleData, id: "uvId" },
        ]}
        xAxis={[{ data: xables, scaleType: "band" }]}
        leftAxis={null}
        margin={{
          left: 10,
          right: 10,
          top: 80,
          bottom: 80,
        }}
        sx={{
          // width: "100%",
          overflowX: "visible",
        }}
      />
    </div>
  );
}
