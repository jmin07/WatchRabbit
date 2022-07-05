import { Link } from "react-router-dom";
import { postJWT } from "../api";
import {
  TitleText,
  Button,
  Input,
  Img,
  CenterDiv,
  SignUpButton,
  SignButton,
} from "../style/styled";


export default function Login() {
  const onSubmit = (e) => {
    console.log("login");
    e.preventDefault();
    const id = e.target.id.value;
    const password = e.target.password.value;
    const data = "/auth/login";
    const props = { path: data, userEamil: id, userPassword: password };
    postJWT(props);
    console.log(id, password);
  };
  return (
    <>
      <CenterDiv
        width="400px"
        height="500px"
        backgroundColor="#282828"
        borderRadius="5px"
      >
        <TitleText color="coral">Login</TitleText>
        <p />
        <form method="post" onSubmit={onSubmit}>
          <Input
            width="228px"
            fontSize="16px"
            name="id"
            id="id"
            type="text"
            placeholder="아이디"
          />
          <p />
          <Input
            width="228px"
            fontSize="16px"
            name="password"
            id="password"
            type="text"
            placeholder="비밀번호"
          />
          <p />
          <SignButton width="110px" type="submit">
            로그인
          </SignButton>
        </form>
        <p />
        <Link to="/signup">
          <SignUpButton width="110px">회원가입</SignUpButton>
        </Link>
        <p />
        <Button width="230px">구글로 로그인</Button>
        <p />
        <Button width="230px">카카오로 로그인</Button>
        <p />
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "	#7BA87B	",
            fontWeight: "bold",
          }}
        >
          비밀번호를 잊어버리셨나요?
        </Link>
      </CenterDiv>
    </>
  );
}
