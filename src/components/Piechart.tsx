import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [{ value: 10 }, { value: 15 }, { value: 20 }, { value: 30 }];

const size = {
  width: 300,
  height: 300,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 30,
  fontWeight: "600",
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function Piechart() {
  return (
    <PieChart
      series={[
        {
          data,
          innerRadius: 67,
          outerRadius: 95,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -90,
          endAngle: 360,
        },
      ]}
      {...size}
    >
      <PieCenterLabel>65% </PieCenterLabel>
    </PieChart>
  );
}
