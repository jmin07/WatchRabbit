import { Link } from "react-router-dom";
import {
  Button,
  Img,
  Container,
  TextSpan,
  TitleButton,
  MainInput,
  TitleSpan,
  MainDiv,
  MainText,
} from "../style/styled";

export default function Main() {
  return (
    <>
      <Container>
        <Container backgroundColor="#323232" padding="20px">
          <TitleSpan margin="0px 50px 0px 105px" fontSize="3rem">
            Watch Rabbit
          </TitleSpan>
          <MainInput placeholder="검색할 물품을 입력하세요"></MainInput>
          <TextSpan position="relative" left="100px" margin="0px 50px 0px 50px">
            감시대상 물품정보가 갱신되었습니다.
          </TextSpan>
          <Link to="/">
            <TitleButton>TITLE</TitleButton>
          </Link>
        </Container>
        <Container backgroundColor="#282828" padding="20px">
          <Button width="130px" marginLeft="110px">
            사이트 안내
          </Button>
          <Button width="130px" marginLeft="20px">
            간편 데이터
          </Button>
          <Button width="130px" marginLeft="20px">
            물품 찾기
          </Button>
          <Button width="130px" marginLeft="20px">
            통계 정보
          </Button>
          <Button width="130px" marginLeft="20px">
            추적 알림 설정
          </Button>
        </Container>
        <Container backgroundColor="#323232" padding="10px 130px 20px 130px">
          <MainDiv backgroundColor="#282828	" height="500px" width="80%">
            <MainText>
              안녕하세요.
              <p />
              당근마켓의 중고거래 시세를 알려주고
              <br />
              필요한 정보를 알림주는 <h1>"감시토끼"</h1> 입니다.
            </MainText>
          </MainDiv>
        </Container>
      </Container>
    </>
  );
}
