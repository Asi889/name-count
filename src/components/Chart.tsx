"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Chart({ m, f }: any) {
  const uData = [0, f];
  const pData = [m, 0];
  const xLabels = ["\u2642", "\u2640"];
  const jj = m ? m.toString() : "0";
  const cc = f ? f.toString() : "0";

  //   console.log(f);

  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: pData, label: jj, id: "pvId", color: "#2E96FF" },
        { data: uData, label: cc, id: "uvId", color: "#FF9DA7" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
      leftAxis={null}
    />
  );
}
