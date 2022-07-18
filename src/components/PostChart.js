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
    게시글수: 370,
  },
  {
    date: "2022/7/11",
    게시글수: 339,
  },
  {
    date: "2022/7/12",
    게시글수: 476,
  },
  {
    date: "2022/7/13",
    게시글수: 390,
  },
  {
    date: "2022/7/14",
    게시글수: 480,
  },
  {
    date: "2022/7/16",
    게시글수: 432,
  },
  {
    date: "2022/7/17",
    게시글수: 278,
  },
];

export const PostChart = () => {
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
        dataKey="게시글수"
        stroke="green   "
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};
