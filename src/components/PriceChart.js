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
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { regiondummydata } from "../script/regiondummydata";
import { chartDataFunc } from "../script/testscript";
import { regionChartFunc } from "../script/regionChartFunc";

export const PriceChart = () => {
  const chartData = regionChartFunc(regiondummydata);
  return (
    // <LineChart
    //   width={1270}
    //   height={350}
    //   data={chartData}
    //   margin={{
    //     top: 5,
    //     right: 30,
    //     left: 20,
    //     bottom: 5,
    //   }}
    // >
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="region" />
    //   <YAxis />
    //   <Tooltip />
    //   <Legend />
    //   <Line
    //     type="monotone"
    //     dataKey="avgPrice"
    //     stroke="coral"
    //     activeDot={{ r: 8 }}
    //   />
    //   {/* <Line type="monotone" dataKey="최저가" stroke="skyblue" />
    //   <Line type="monotone" dataKey="최고가" stroke="#dc4343" /> */}
    // </LineChart>
      <BarChart
        width={1270}
        height={350}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="region" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="평균가" stackId="a" fill="coral" />
        <Bar dataKey="최저가" stackId="a" fill="skyblue" />
        <Bar dataKey="최고가" stackId="a" fill="#dc4343" />
      </BarChart>
  );
};
