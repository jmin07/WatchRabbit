import { Box, Container } from "@mui/material";
import { PostChart } from "./PostChart";
import { PriceChart } from "./PriceChart";

export default function Statistics() {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            m: 5,
            mt: 2,
            background: "white",
            borderRadius: "5px",
            p: 5,
            boxShadow: "0px 0px 5px 1px #ccc",
            height: "42rem",
          }}
        >
          <h2>서울 가산동 노트북</h2>
          {/* <h4 style={{ color: "gray" }}>날짜를 선택해주세요</h4> */}
          <h3>2022/7/10 ~ 2022/7/17 까지의 시세, 게시글 수입니다</h3>
          {/*캘린더 라이브러리*/}
          <p />
          <PriceChart /> {/*동적으로 데이터 변경*/}
          <PostChart/>
        </Box>
      </Container>
    </>
  );
}
