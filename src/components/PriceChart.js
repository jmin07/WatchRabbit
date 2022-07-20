import { Box, Container, Grid } from "@mui/material";
import { useContext } from "react";
import { SearchDataContext } from "../contexts/SearchDataContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { dummyData } from "../script/dummydata";
import { chartDataFunc } from "../script/testscript";

// import { RegionTestContext } from "../App";

export const PriceChart = () => {
  // const { regionTest } = useContext(RegionTestContext);
  const chartData = chartDataFunc(dummyData);
  return (
    <LineChart
      width={1270}
      height={350}
      data={chartData}
      background={{ fill: "red" }}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="평균가"
        stroke="coral"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="최저가" stroke="skyblue" />
      <Line type="monotone" dataKey="최고가" stroke="#dc4343" />
    </LineChart>
  );
};
