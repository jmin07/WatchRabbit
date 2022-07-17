import { Box, Container } from "@mui/material";
import Carousel from "./Carousel";

export default function Home() {
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
          <Carousel />
        </Box>
      </Container>
    </>
  );
}
