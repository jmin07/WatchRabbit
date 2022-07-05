import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import {
  TitleText,
  Input,
  Select,
  CenterDiv,
  Container,
  SearchButton,
  MainPageButton,
  ModalButton,
  ModalCloseButton,
} from "../style/styled";
import React, { useState } from "react";
import Modal from "react-modal";
import "../style/modal.css";
import "../style/main.css";
import Test from "./Test";

Modal.setAppElement("Title");
export default function Title() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* 타이틀 화면 구현 */}
      <CenterDiv
        width="30%"
        height="90%"
        boxShadow="0px 0px 20px 1px #683809"
        borderRadius="5px"
        backgroundColor="white"
      >
        <Container position="relative" top="20%">
          <TitleText fontSize="80px" padding="2%" color="coral">
            Watch Rabbit
          </TitleText>
          <Select>
            <option>전국</option>
            <option>서울</option>
            <option>안양</option>
          </Select>
          <Select>
            <option>전체</option>
            <option>가산동</option>
            <option>평촌동</option>
          </Select>
          <Input
            fontSize="16px"
            borderRadius="3px 0px 0px 3px"
            type="text"
            placeholder="검색어를 입력하세요"
          />
          <SearchButton
            boxShadow="1px 0px 3px 0px rgb(170, 89, 22)"
            borderRadius="0px 3px 3px 0px"
          >
            검색
          </SearchButton>
          <p />
        </Container>
        <Link to="/main">
          <MainPageButton>메인 페이지</MainPageButton>
        </Link>
      </CenterDiv>
      {/* 타이틀 화면 */}

      {/* 로그인 모달 구현 react-modal 사용*/}
      <ModalButton onClick={() => setModalOpen(true)}>로그인</ModalButton>
      <Modal
        style={{
          overlay: {
            background: "rgba(0, 0, 0, 0.7)",
          },
          content: {
            position: "absolute",
            top: "20%",
            left: "38.3%",
            background: "white",
            border: "none",
            width: "23rem",
            height: "29rem",
            boxShadow: "0px 0px 10px 1px rgb(170, 89, 22)",
          },
        }}
        closeTimeoutMS={300}
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <Test />
        <ModalCloseButton onClick={() => setModalOpen(false)}>
          X
        </ModalCloseButton>
      </Modal>
      {/* 로그인 모달 */}
      <Link to="/test" style={{ textDecoration: "none" }}>
        <Button variant="contained">테스트</Button>
      </Link>
    </>
  );
}
