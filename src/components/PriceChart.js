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

const data = [
  {
    date: "2022/7/10",
    평균시세: 370000,
  },
  {
    date: "2022/7/11",
    평균시세: 339800,
  },
  {
    date: "2022/7/12",
    평균시세: 476000,
  },
  {
    date: "2022/7/13",
    평균시세: 390800,
  },
  {
    date: "2022/7/14",
    평균시세: 480000,
  },
  {
    date: "2022/7/16",
    평균시세: 432400,
  },
  {
    date: "2022/7/17",
    평균시세: 278000,
  },
];

export const PriceChart = () => {
  return (
    <LineChart
      width={1300}
      height={280}
      data={data}
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
        dataKey="평균시세"
        stroke="coral"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};
