import { Box, Container } from "@mui/material";
import SearchTable from "./SearchTable"

export default function Searchpage() {
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
            height: "100vh",
          }}
        >
          서울 가산동에 있는 삼성 노트북 판매 현황
          <SearchTable />
        </Box>
      </Container>
    </>
  );
}
