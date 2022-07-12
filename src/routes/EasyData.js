import { Box, Container, Grid } from "@mui/material";

export default function EasyData() {
  return (
    <>
      <Container maxWidth="lg" sx={{ background: "" }}>
        <Grid container sx={{ background: "" }}>
          <Grid item xs={6}>
            <Box
              sx={{
                m: 2,
                ml: 5,
                p: 5,
                background: "#F9F2EA",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #C0A786",
                height: "11.5rem",
              }}
            >
              검색한 물품의 시세는 20000원 입니다
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                m: 2,
                mr: 5,
                p: 5,
                background: "#F9F2EA",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #C0A786",
                height: "11.5rem",
              }}
            >
              그래프
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                m: 2,
                ml: 5,
                p: 5,
                background: "#F9F2EA",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #C0A786",
                height: "11.5rem",
              }}
            >
              검색된 결과 수는 23.5412개 입니다.
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                m: 2,
                mr: 5,
                p: 5,
                background: "#F9F2EA",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 1px #C0A786",
                height: "11.5rem",
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
