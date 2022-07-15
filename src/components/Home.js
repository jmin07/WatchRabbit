import { Box, Container } from "@mui/material";
import Carousel from "./Carousel";

export default function Home() {
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
          <Carousel />
        </Box>
      </Container>
    </>
  );
}
