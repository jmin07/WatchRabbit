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
  Divider,
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
import { DBdataContext } from "../contexts/DBdataContext";
import { SumDataContext } from "../contexts/SumDataContext";
import { AllDBdataContext } from "../contexts/AllDBdataContext";
import { getLogOut, postSearchData } from "../api";

import { get_stData } from "../script/searchTable";
import { dummydata } from "../script/dummydata";

export default function Header() {
  //
  const { searchData, setSearchData } = useContext(SearchDataContext);
  const { DBdata, setDBdata } = useContext(DBdataContext);
  const { sumData, setSumData } = useContext(SumDataContext);
  const { setAllDBdata } = useContext(AllDBdataContext);
  const navigate = useNavigate();

  const { setTitleOn } = useContext(TitleContext);
  const [login, setLogin] = useState({
    TrueFalse: false,
    profileImage:
      "https://watchrabbit.s3.ap-northeast-2.amazonaws.com/carrot+(1).png",
  });
  //
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const city = e.target[0].value;
    const area = e.target[1].value;
    const value = e.target[2].value;
    // console.log(city, area, value);
    const data = "/db/test";
    // if (e.target[0].value === "전국") {
    // }
    const props = {
      path: data,
      userCity: city,
      userArea: area,
      userValue: value,
    };
    setSearchData((searchData) => ({
      ...props,
    }));
    const response = postSearchData(props);
    response.then((res) => {
      let data;
      if (e.target[0].value === "전국") {
        data = get_stData(res.result.total);
        setDBdata(res.result.total);
      } else {
        data = get_stData(res.result.local);
        setDBdata(res.result.local);
      }
      setAllDBdata(res.result.total);
      setSumData(data);
    });
    //더미데이터 쓸때
    // const dummy = get_stData(dummydata);
    // setSumData(dummy);
    // setDBdata(dummydata);
    // setAllDBdata(dummydata);
    //더미더미
    navigate("/statistics");
  };
  const LogOut = () => {
    const data = "/auth/logout";
    const props = { path: data };
    getLogOut(props);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Grid>
          <Box
            sx={{
              // m: 5,
              // mt: 2,
              mb: 2,
              ml: 5,
              mr: 5,
              // background: "#F9F2EA",
              background: "#f5f5f5", //"#fff6e5"
              borderRadius: "0px 0px 5px 5px",
              boxShadow: "0px 0px 5px 1px #ccc",
              p: 2,
            }}
          >
            <Grid container>
              <Grid item xs={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
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
                </Link>
              </Grid>
              <Grid item xs={5}>
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
              <Grid item xs={3}>
                <Box sx={{ display: "flex", float: "left" }}>
                  <NotificationsIcon
                    sx={{ color: "coral", m: 2, verticalAlign: "middle" }}
                  />
                  <div style={{ color: "dimgray", marginTop: "1.1rem" }}>
                    5개의 물품을 추적중입니다...
                  </div>

                  {/* 검색 된 단어: <p />
                  {searchData.userCity} {searchData.userArea}{" "}
                  {searchData.userValue} */}
                </Box>
              </Grid>
              <Grid item xs={1}>
                {/* 로그인 모달 버튼 */}
                {login.TrueFalse ? (
                  <Tooltip title="로그아웃">
                    <Button color="warning" sx={{ m: 1 }} onClick={LogOut}>
                      <Avatar>
                        <Img src={login.profileImage} width="50px" />
                      </Avatar>
                    </Button>
                  </Tooltip>
                ) : (
                  <Tooltip title="로그인">
                    <Button
                      color="warning"
                      sx={{ m: 1 }}
                      onClick={() => setModalOpen(true)}
                    >
                      <Avatar></Avatar>
                    </Button>
                  </Tooltip>
                )}
                {/* <Button
                  color="warning"
                  sx={{ m: 1 }}
                  onClick={() => setModalOpen(true)}
                >
                  <Avatar>
                    {login.TrueFalse ? (
                      <Tooltip title="로그아웃">
                        <Img src={login.profileImage} width="50px" />
                      </Tooltip>
                    ) : null}
                  </Avatar>
                </Button> */}
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Divider
                    sx={{
                      color: "gray",
                      mb: 2,
                      fontFamily: "KoPubDotumMedium",
                    }}
                  >
                    menu
                  </Divider>

                  <Box>
                    {/* 
                    <Link to="/data" style={{ textDecorationLine: "none" }}>
                      <Button
                        sx={{
                          ml: 2,
                          fontWeight: "bold",
                          color: "white",
                          background: "coral",
                        }}
                        variant="contained"
                        color="warning"
                      >
                        간편 데이터
                      </Button>
                    </Link> */}

                    <Link
                      to="/statistics"
                      style={{ textDecorationLine: "none" }}
                    >
                      <Button
                        sx={{
                          ml: 2,
                          fontWeight: "bold",
                          color: "white",
                          background: "coral",
                        }}
                        variant="contained"
                        color="warning"
                      >
                        시세 통계
                      </Button>
                    </Link>

                    <Link to="/search" style={{ textDecorationLine: "none" }}>
                      <Button
                        sx={{
                          ml: 2,
                          fontWeight: "bold",
                          color: "white",
                          background: "coral",
                        }}
                        variant="contained"
                        color="warning"
                      >
                        판매 현황
                      </Button>
                    </Link>

                    <Link to="/trace" style={{ textDecorationLine: "none" }}>
                      <Button
                        sx={{
                          ml: 2,
                          fontWeight: "bold",
                          color: "white",
                          background: "coral",
                        }}
                        variant="contained"
                        color="warning"
                      >
                        추적 알림
                      </Button>
                    </Link>

                    <Link to="/main" style={{ textDecorationLine: "none" }}>
                      <Button
                        sx={{
                          ml: 2,
                          fontWeight: "bold",
                          color: "white",
                          background: "coral",
                        }}
                        variant="contained"
                        color="warning"
                      >
                        사이트 안내
                      </Button>
                    </Link>
                  </Box>
                </Box>
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

          {/* <Box>
            <Link to="/" style={{ textDecorationLine: "none" }}>
              <Button
                sx={{
                  ml: 6,
                  fontWeight: "bold",
                  color: "white",
                  background: "coral",
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
                  background: "coral",
                }}
                variant="contained"
                color="warning"
              >
                간편 데이터
              </Button>
            </Link>

            <Link to="/search" style={{ textDecorationLine: "none" }}>
              <Button
                sx={{
                  ml: 2,
                  fontWeight: "bold",
                  color: "white",
                  background: "coral",
                }}
                variant="contained"
                color="warning"
              >
                물품 검색
              </Button>
            </Link>

            <Link to="/statistics" style={{ textDecorationLine: "none" }}>
              <Button
                sx={{
                  ml: 2,
                  fontWeight: "bold",
                  color: "white",
                  background: "coral",
                }}
                variant="contained"
                color="warning"
              >
                통계 정보
              </Button>
            </Link>

            <Link to="/trace" style={{ textDecorationLine: "none" }}>
              <Button
                sx={{
                  ml: 2,
                  fontWeight: "bold",
                  color: "white",
                  background: "coral",
                }}
                variant="contained"
                color="warning"
              >
                추적 알림
              </Button>
            </Link>
          </Box> */}
        </Grid>
      </Container>
      <Outlet />
    </>
  );
}
