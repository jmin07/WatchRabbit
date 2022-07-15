import { CenterDiv } from "../style/styled";
import { Typography, TextField, Button, Divider } from "@mui/material";

export default function ForgotPW() {
  return (
    <>
      <CenterDiv
        width="25%"
        height="70%"
        boxShadow="0px 0px 5px 1px #C0A786"
        borderRadius="2px"
        backgroundColor="white"
        padding="3rem 5rem 3rem 5rem"
        textAlign="none"
      >
        <form>
          <Typography
            sx={{
              fontSize: "30px",
              color: "coral",
              m: 2,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            비밀번호 찾기
          </Typography>
          <Divider sx={{ margin: "2rem 0rem 3rem 0rem" }} />

          <Typography sx={{ color: "dimgray", mb: 7 }}>
            가입한 이메일 주소를 입력해주세요
            <br /> 비밀번호 재설정을 위한 이메일을 보내드립니다
          </Typography>

          <Typography component="h1" varient="h5">
            이메일
          </Typography>
          <TextField
            color="warning"
            sx={{ mt: 1, mb: 2 }}
            label="email"
            required
            fullWidth
            name="email"
            autoComplete="email"
            autoFocus
            id="email"
          />
          <Typography sx={{ color: "dodgerblue", mb: 5 }}>
            대소문자를 구분해서 입력해주세요
          </Typography>

          <Button
            color="warning"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 7, background: "coral", fontSize: "1rem", p: 1 }}
          >
            확인
          </Button>
        </form>
      </CenterDiv>
    </>
  );
}
