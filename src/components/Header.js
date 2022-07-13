import { Link } from "react-router-dom";
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
import React, { useState } from "react";
import Login from "./Login";
import CloseIcon from "@mui/icons-material/Close";

import "../style/font.css";

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loginDone, setLoginDone] = useState();

  function getLogin(loginResult) {
    setLoginDone(loginResult);
  }

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid>
          <Box
            sx={{
              m: 5,
              mt: 2,
              mb: 2,
              background: "#F9F2EA",
              borderRadius: "5px",
              boxShadow: "0px 0px 5px 1px #C0A786",
              p: 2,
            }}
          >
            <Grid container>
              <Grid item xs={3}>
                <Link to="/" style={{ textDecorationLine: "none" }}>
                  <Button
                    size="small"
                    color="warning"
                    sx={{
                      typography: "Watch Rabbit",
                      fontSize: 30,
                      letterSpacing: 3,
                      color: "coral",
                      fontFamily: "ulsanjunggu",
                      borderRadius: "1rem",
                    }}
                  >
                    Watch <span style={{ color: "#357a38" }}>Rabbit</span>
                    <Img src="/img/carrot.png" width="35px" />
                  </Button>
                </Link>
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
                    {loginDone ? (
                      <Tooltip title="로그아웃">
                        <Img src="/img/WRN.png" width="50px" />
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
            <Login getLogin={getLogin} />
            <Grid container>
              <Grid item xs sx={{ ml: 3 }}>
                <Link to="/main/forgotpw" style={{ color: "dodgerblue" }}>
                  비밀번호 찾기
                </Link>
              </Grid>
              <Grid item sx={{ mr: 3 }}>
                <Link to="/main/signup" style={{ color: "dodgerblue" }}>
                  회원가입
                </Link>
              </Grid>
            </Grid>
          </Modal>

          <Box>
            <Link to="/main/home" style={{ textDecorationLine: "none" }}>
              <Button
                sx={{
                  ml: 6,
                  fontWeight: "bold",
                  color: "white",
                  background: "#B6AB9D",
                }}
                variant="contained"
                color="warning"
              >
                사이트 안내
              </Button>
            </Link>

            <Link to="/main/data" style={{ textDecorationLine: "none" }}>
              <Button
                sx={{
                  ml: 2,
                  fontWeight: "bold",
                  color: "white",
                  background: "#B6AB9D",
                }}
                variant="contained"
                color="warning"
              >
                간편 데이터
              </Button>
            </Link>

            <Link to="/main/trace" style={{ textDecorationLine: "none" }}>
              <Button
                sx={{
                  ml: 2,
                  fontWeight: "bold",
                  color: "white",
                  background: "#B6AB9D",
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
