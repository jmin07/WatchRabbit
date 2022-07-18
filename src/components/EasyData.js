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
import { DBdataContext } from "../contexts/DBdataContext";

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
      width={550}
      height={230}
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
  const { DBdata } = useContext(DBdataContext);

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
                background: "white",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #ccc",
                height: "17.5rem",
                color: "dimgray",
              }}
            >
              <h1 style={{ marginLeft: "20px" }}>
                {searchData.userValue}의 가격 안내
              </h1>
              <br />
              <Box sx={{ ml: 8 }}>
                <h2>전국 평균 가격은 {}원 입니다.</h2>
                <h2>
                  {searchData.userCity} {searchData.userArea}의 평균 가격은 {}원
                  입니다.
                </h2>
              </Box>
              {/* 검색한 도시는 {searchData.userCity} {searchData.userArea} 입니다 */}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                m: 2,
                mr: 5,
                p: 5,
                background: "white",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #ccc",
                height: "17.5rem",
                color: "dimgray",
              }}
            >
              <h2>시세 차트</h2>
              <LineDataChart />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                m: 2,
                ml: 5,
                p: 5,
                background: "white",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #ccc",
                height: "17.5rem",
                color: "dimgray",
              }}
            >
              <h1>{searchData.userValue}의 판매 게시글 수 안내</h1>
              <br />

              <Box sx={{ ml: 8 }}>
                <h2>전국 판매 게시글 수는 {}개 입니다.</h2>
                <h2>
                  {searchData.userCity} {searchData.userArea}의 판매 게시글 수는{" "}
                  {}개 입니다.
                </h2>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                m: 2,
                mr: 5,
                p: 5,
                background: "white",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #ccc",
                height: "17.5rem",
                color: "dimgray",
              }}
            >
              <h1>로그인한 아이디의 알림 설정</h1>
              <br />
              <h2>현재 설정된 알림 대상은 알림설정글수 개입니다.</h2>
              <h2>다음 메일 알림은 메일전송예정시간 입니다.</h2>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
