import { Box, Container, Grid } from "@mui/material";
import styled from "styled-components";
import { PostChart } from "./PostChart";
import { PriceChart } from "./PriceChart";
import { SearchDataContext } from "../contexts/SearchDataContext";
import { SumDataContext } from "../contexts/SumDataContext";
import { useContext } from "react";

const GridStyle = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  height: 9rem;
  box-shadow: 0px 0px 3px 1px #ccc;
  text-align: center;
`;
const ChartStyle = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 3px 1px #ccc;
  text-align: center;
  padding-top: 2rem;
`;
const MainTextStyle = styled.span`
  font-size: 3rem;
  color: ${(props) => props.color || "coral"};
  font-weight: bold;
`;
const SubTextStyle = styled.span`
  font-size: 1.1rem;
  color: dimgray;
  font-weight: bold;
`;
const TitleTextStyle = styled.div`
  font-size: 1.5rem;
  color: gray;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

export default function Statistics() {
  const { searchData } = useContext(SearchDataContext);
  const { sumData } = useContext(SumDataContext);

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            m: 5,
            mt: 2,
            background: "#f5f5f5",
            borderRadius: "5px",
            p: 5,
            boxShadow: "0px 0px 5px 1px #ccc",
            height: "42rem",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TitleTextStyle>
                {searchData.userCity} {searchData.userArea} {searchData.userValue} 시세 통계
              </TitleTextStyle>
            </Grid>
            <Grid item xs={3}>
              <GridStyle>
                <SubTextStyle>평균 시세</SubTextStyle>
                <br />
                <br />
                <MainTextStyle>{sumData[1]}원</MainTextStyle>
              </GridStyle>
            </Grid>
            <Grid item xs={3}>
              <GridStyle>
                <SubTextStyle>최저가</SubTextStyle>
                <br />
                <br />
                <MainTextStyle color="skyblue">{sumData[2]}원</MainTextStyle>
              </GridStyle>
            </Grid>
            <Grid item xs={3}>
              <GridStyle>
                <SubTextStyle>최고가</SubTextStyle>
                <br />
                <br />
                <MainTextStyle color="#dc4343">{sumData[3]}원</MainTextStyle>
              </GridStyle>
            </Grid>
            <Grid item xs={3}>
              <GridStyle>
                <SubTextStyle>게시글 수</SubTextStyle>
                <br />
                <br />
                <MainTextStyle color="dimgray">{sumData[4]}개</MainTextStyle>
              </GridStyle>
            </Grid>
          </Grid>
          {/* <h2>서울 가산동 노트북</h2> */}
          {/* <h4 style={{ color: "gray" }}>날짜를 선택해주세요</h4> */}
          {/* <h3>2022/7/10 ~ 2022/7/17 까지의 시세, 게시글 수입니다</h3> */}
          {/*캘린더 라이브러리*/}
          <br />
          <ChartStyle>
            <PriceChart /> {/*동적으로 데이터 변경*/}
          </ChartStyle>
          {/* <PostChart/> */}
        </Box>
      </Container>
    </>
  );
}
