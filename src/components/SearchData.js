import { Box, Container } from "@mui/material";
import styled from "styled-components";
import SearchTable from "./SearchTable";
import { SearchDataContext } from "../contexts/SearchDataContext";
import { useContext } from "react";

const TitleTextStyle = styled.div`
  font-size: 1.5rem;
  color: gray;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

export default function Searchpage() {
  const { searchData } = useContext(SearchDataContext);
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
          <TitleTextStyle>
            {searchData.userCity} {searchData.userArea} {searchData.userValue} 판매 현황
          </TitleTextStyle>
          <br />
          <SearchTable />
        </Box>
      </Container>
    </>
  );
}
