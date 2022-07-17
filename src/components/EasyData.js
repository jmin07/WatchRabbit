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
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const LineDataChart = () => {
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

export default function EasyData() {
  const { searchData } = useContext(SearchDataContext);
  console.log("객체", searchData);

  return (
    <>
      <Container maxWidth="xl" sx={{ background: "" }}>
        <Grid container sx={{ background: "" }}>
          <Grid item xs={6}>
            <Box
              sx={{
                m: 2,
                ml: 5,
                p: 5,
                background: "#fff6e5",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #C0A786",
                height: "17.5rem",
              }}
            >
              {/* 검색한 물품의 시세는 원 입니다 */}
              검색한 도시는 {searchData.userCity} {searchData.userArea} 입니다
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                m: 2,
                mr: 5,
                p: 5,
                background: "#fff6e5",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #C0A786",
                height: "17.5rem",
              }}
            >
              검색한 물품은 {searchData.userValue} 입니다
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                m: 2,
                ml: 5,
                p: 5,
                background: "#fff6e5",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #C0A786",
                height: "17.5rem",
              }}
            >
              <LineDataChart />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                m: 2,
                mr: 5,
                p: 5,
                background: "#fff6e5",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #C0A786",
                height: "17.5rem",
              }}
            >
              지역, 동네 위치정보
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
