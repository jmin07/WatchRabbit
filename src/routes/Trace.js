import { Box, Container } from "@mui/material";

export default function Trace() {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            m: 5,
            mt: 2,
            background: "#F9F2EA",
            borderRadius: "5px",
            p: 5,
            boxShadow: "0px 0px 5px 1px #C0A786",
            height: "30rem",
          }}
        >
          추적 알림 설정
          <p />
          추적할 상품을 설정하고 알림을 기다리세요.
          <br/>
          Watch Rabbit이 추적하고 알려드립니다.
          <p />
          해당 서비스는 로그인이 필요한 서비스입니다!
        </Box>
      </Container>
    </>
  );
}
