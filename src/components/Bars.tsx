import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const chartSetting = {
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};
const dataset = [
  {
    seoul: 180,
    month: "Jan",
  },
  {
    seoul: 200,
    month: "Fev",
  },
  {
    seoul: 290,
    month: "Mar",
  },
  {
    seoul: 250,
    month: "Apr",
  },
  {
    seoul: 299,
    month: "May",
  },
  {
    seoul: 150,
    month: "June",
  },
  {
    seoul: 359,
    month: "July",
  },
  {
    seoul: 249,
    month: "Aug",
  },
  {
    seoul: 131,
    month: "Sept",
  },
  {
    seoul: 180,
    month: "Oct",
  },
  {
    seoul: 280,
    month: "Nov",
  },
  {
    seoul: 250,
    month: "Dec",
  },
];

const valueFormatter = (value: number) => `${value}$`;

export default function Bars() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[{ dataKey: "seoul", label: "35-", valueFormatter }]}
      {...chartSetting}
    />
  );
}
