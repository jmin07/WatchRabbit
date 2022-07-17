import { Link, useNavigate } from "react-router-dom";
import { Img } from "../style/styled";
import { Outlet } from "react-router-dom";
import SelectArea from "../components/SelectArea";

import {
  Button,
  Paper,
  IconButton,
  InputBase,
  Box,
  Grid,
  Container,
  Tooltip,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

// 로그인 모달 import
import Modal from "react-modal";
import React, { useContext, useState } from "react";
import Login from "./Login";
import CloseIcon from "@mui/icons-material/Close";

import "../style/font.css";
import { TitleContext } from "../contexts/TitleContext";
import { LoginDataContext } from "../contexts/LoginDataContext";
import { SearchDataContext } from "../contexts/SearchDataContext";
import { postSearchData } from "../api";

export default function Header() {
  //
  const { searchData, setSearchData } = useContext(SearchDataContext);
  const navigate = useNavigate();

  const { setTitleOn } = useContext(TitleContext);
  const [login, setLogin] = useState(false);
  //
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = (e) => {
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
    navigate("/data");
    setSearchData(searchData => ({
      ...props,
    }));
    const response = postSearchData(props);
    response.then((res) => {
      // setSearchData(res);
    });
  };

  return (
    <>
      <Container maxWidth="xl">
        <Grid>
          <Box
            sx={{
              m: 5,
              mt: 2,
              mb: 2,
              // background: "#F9F2EA",
              background: "#fff6e5",
              borderRadius: "5px",
              boxShadow: "0px 0px 5px 1px #C0A786",
              p: 2,
            }}
          >
            <Grid container>
              <Grid item xs={3}>
                <Button
                  size="small"
                  color="warning"
                  sx={{
                    typography: "Watch Rabbit",
                    fontSize: "2rem",
                    letterSpacing: 3,
                    color: "coral",
                    fontFamily: "ulsanjunggu",
                    borderRadius: "1rem",
                  }}
                  onClick={() => setTitleOn(true)}
                >
                  Watch <span style={{ color: "#357a38" }}>Rabbit</span>
                  <Img src="/img/carrot.png" width="35px" />
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Paper
                  component="form"
                  action="/data"
                  sx={{
                    mt: 1,
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "90%",
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
              <Grid item xs={2}>
                <Box>
                  <NotificationsIcon
                    sx={{ color: "coral", m: 2, verticalAlign: "middle" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={1}>
                {/* 로그인 모달 버튼 */}
                <Button
                  color="warning"
                  sx={{ m: 1 }}
                  onClick={() => setModalOpen(true)}
                >
                  <Avatar>
                    {login ? (
                      <Tooltip title="로그아웃">
                        <Img src="/img/carrot.png" width="50px" />
                      </Tooltip>
                    ) : null}
                  </Avatar>
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* 로그인 모달 */}
          <Modal
            style={{
              overlay: {
                background: "rgba(0, 0, 0, 0.7)",
              },
              content: {
                position: "absolute",
                top: "12%",
                left: "36.7%",
                background: "white",
                border: "none",
                width: "23rem",
                height: "33rem",
                boxShadow: "0px 0px 5px 1px dimgray",
              },
            }}
            closeTimeoutMS={300}
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
          >
            <IconButton
              sx={{ position: "absolute", top: "2%", left: "88%" }}
              onClick={() => setModalOpen(false)}
            >
              <CloseIcon color="warning" />
            </IconButton>
            <LoginDataContext.Provider value={{ login, setLogin }}>
              <Login />
            </LoginDataContext.Provider>

            <Grid container>
              <Grid item xs sx={{ ml: 3 }}>
                <Link to="/forgotpw" style={{ color: "dodgerblue" }}>
                  비밀번호 찾기
                </Link>
              </Grid>
              <Grid item sx={{ mr: 3 }}>
                <Link to="/signup" style={{ color: "dodgerblue" }}>
                  회원가입
                </Link>
              </Grid>
            </Grid>
          </Modal>

          <Box>
            <Link to="/" style={{ textDecorationLine: "none" }}>
              <Button
                sx={{
                  ml: 6,
                  fontWeight: "bold",
                  color: "white",
                  background: "#8dab66",
                }}
                variant="contained"
                color="warning"
              >
                사이트 안내
              </Button>
            </Link>

            <Link to="/data" style={{ textDecorationLine: "none" }}>
              <Button
                sx={{
                  ml: 2,
                  fontWeight: "bold",
                  color: "white",
                  background: "#8dab66",
                }}
                variant="contained"
                color="warning"
              >
                간편 데이터
              </Button>
            </Link>

            <Link to="/trace" style={{ textDecorationLine: "none" }}>
              <Button
                sx={{
                  ml: 2,
                  fontWeight: "bold",
                  color: "white",
                  background: "#8dab66",
                }}
                variant="contained"
                color="warning"
              >
                추적 알림
              </Button>
            </Link>
          </Box>
        </Grid>
      </Container>
      <Outlet />
    </>
  );
}
