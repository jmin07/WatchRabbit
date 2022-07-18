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
            background: "#fff6e5",
            borderRadius: "5px",
            p: 5,
            boxShadow: "0px 0px 5px 1px #C0A786",
            height: "42rem",
          }}
        >
          {}의 {}에 있는 {} 판매 현황
          <SearchTable />
        </Box>
      </Container>
    </>
  );
}
