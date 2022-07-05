import { Link } from "react-router-dom";
import {
  Button,
  TitleText,
  CenterDiv,
  Input,

} from "../style/styled";

export default function SignUp() {
  return (
    <>
      <CenterDiv
        width="600px"
        height="600px"
        boxShadow="0px 0px 10px 1px rgb(170, 89, 22)"
        backgroundColor="rgb(253, 240, 228)"
        borderRadius="5px"
        padding="2%"
      >
        <TitleText color="coral">회원 가입</TitleText>
        <Input placeholder="아이디를 입력하세요"></Input>
        <Button>중복 확인</Button>
        <p />
        <Input placeholder="비밀번호를 입력하세요"></Input>
        <p />
        <Input placeholder="비밀번호 확인"></Input>
        <p />
        <Input placeholder="이메일"></Input>
        <p />
        <Input placeholder="이메일"></Input>
        <p />

      </CenterDiv>
    </>
  );
}
