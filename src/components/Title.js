import { Link, useNavigate } from "react-router-dom";
import {
  Paper,
  IconButton,
  InputBase,
  Box,
  Grid,
  Zoom,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { CenterDiv, Img } from "../style/styled";
import Modal from "react-modal";
import "../style/modal.css";
import "../style/main.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import "../style/font.css";
import HomeIcon from "@mui/icons-material/Home";
//
import { TitleContext } from "../contexts/TitleContext";
import React, { useContext, useState } from "react";
import SelectArea from "./SelectArea";
import { SearchDataContext } from "../contexts/SearchDataContext";
import { postSearchData } from "../api";
//
Modal.setAppElement("Title");

export default function Title() {
  //
  const { setTitleOn } = useContext(TitleContext);
  const { setSearchData } = useContext(SearchDataContext);

  //
  const navigate = useNavigate();

  const onSubmit = (e) => {
    // if (e.target[0].value !== "") {
    //   navigate("/", { state: value });
    // }
    e.preventDefault();
    const city = e.target[0].value;
    const area = e.target[1].value;
    const value = e.target[2].value;
    console.log(city, area, value);
    const data = "/db/test";
    const props = {
      path: data,
      userCity: city,
      userArea: area,
      userValue: value,
    };
    setTitleOn(false);
    navigate("/statistics");
    setSearchData((searchData) => ({
      ...props,
    }));
    const response = postSearchData(props);
    response.then((res) => {
      // setSearchData(res);
    });
  };

  const [sideBar, setSideBar] = useState(false);

  window.onload = function () {
    setSideBar(true);
  };

  return (
    <>
      {/* 타이틀 화면 구현 */}
      <CenterDiv
        width="40%"
        height="100vh"
        boxShadow="0px 0px 5px 1px #ccc"
        borderRadius="7px"
        // backgroundColor="#F9F2EA"
        backgroundColor="#f5f5f5" //"#fff6e5"
      >
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item sx={{ margin: 3 }}></Grid>
        </Grid>
        <Grid container sx={{ mt: 35 }}>
          <Grid item xs={12}>
            <Box
              sx={{
                typography: "Watch Rabbit",
                fontSize: 60,
                letterSpacing: 8,
                color: "#ff803d",
                fontFamily: "ulsanjunggu",
              }}
            >
              Watch<span style={{ color: "#357a38" }}>Rabbit</span>
              <Img src="/img/carrot.png" width="65px" />
            </Box>
          </Grid>
          <Grid item xs={2} sx={{ mt: 5 }}></Grid>
          <Grid item xs={8} sx={{ mt: 7 }}>
            {/* 검색창 */}
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "98%",
              }}
              onSubmit={onSubmit}
            >
              <SelectArea />
              <InputBase
                sx={{ ml: 2, flex: 1 }}
                placeholder="검색할 물품을 입력하세요"
              />
              <IconButton type="submit" sx={{ p: "10px" }}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>

          <Grid item xs={12} sx={{ m: 7 }}>
            <Link to="/main">
              <Tooltip title="Main Page" arrow TransitionComponent={Zoom}>
                <IconButton onClick={() => setTitleOn(false)}>
                  <HomeIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Link>
          </Grid>
        </Grid>
      </CenterDiv>

      <Box
        sx={{
          height: "100vh",
          width: "100%",
          background: "rgba(0, 0, 0, 0.8)",
          position: "absolute",
          opacity: sideBar ? "100%" : "0%",
          top: sideBar ? "0%" : "-100%",
          transitionDuration: "1s",
        }}
        onClick={() => setSideBar(false)}
      >
        <IconButton
          onClick={() => setSideBar(false)}
          sx={{ position: "absolute", top: "95%", left: "50%" }}
        >
          <ArrowDropUpIcon fontSize="large" sx={{ color: "white" }} />
        </IconButton>
        <Box
          sx={{ color: "white", position: "absolute", left: "20%", top: "10%" }}
        >
          <h1>안녕하세요</h1> <p />
          <h2>중고물품의 시세를</h2>
          <p />
          <h2>알려주고 감시해주는</h2>
          <p />
          <h2>
            <span style={{ color: "" }}>감시토끼</span> 입니다
          </h2>
          <br />
          <br />
          <br />
          아무곳이나 클릭하세요
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: sideBar ? "-20%" : "-2%",
          transitionDuration: "1s",
        }}
      >
        <IconButton
          sx={{ opacity: sideBar ? "0%" : "100%" }}
          onClick={() => setSideBar(true)}
        >
          <ArrowDropDownIcon fontSize="large" />
        </IconButton>
      </Box>
    </>
  );
}
