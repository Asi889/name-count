"use client";
import React, { use, useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Chart(chartData: any) {
  const [data, setData] = useState([]);

  const valueFormatter = (value: number) => `${value}`;

  useEffect(() => {
    const sliced = chartData.chartData.slice(0, -1);
    setData(sliced);
  }, [chartData]);

  return (
    <div className="w-full max-w-xl overflow-auto">
      {data.length > 0 ? (
        <BarChart
          className="w-full"
          height={150}
          dataset={data}
          xAxis={[{ scaleType: "band", dataKey: "data" }]}
          series={[{ dataKey: "label", valueFormatter }]}
          leftAxis={null}
        />
      ) : (
        ""
      )}
    </div>
  );
}
