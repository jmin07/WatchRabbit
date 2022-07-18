import { Box, Container } from "@mui/material";

export default function Statistics() {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            m: 5,
            mt: 2,
            background: "#fff6e5",
            borderRadius: "5px",
            p: 5,
            boxShadow: "0px 0px 5px 1px #C0A786",
            height: "42rem",
          }}
        >
          통계 정보 페이지
        </Box>
      </Container>
    </>
  );
}
