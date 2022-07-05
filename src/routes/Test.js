import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Link,
  Grid,
  Typography,
  Avatar,
  Box,
  Container,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { postJWT } from "../api";

export default function Test() {
  const onSubmit = (e) => {
    console.log("login complete");

    e.preventDefault();
    const id = e.target.email.value;
    const password = e.target.password.value;
    const data = "/auth/login";
    const props = { path: data, userEamil: id, userPassword: password };
    console.log(id, password);
    const response = postJWT(props);
    response.then((res) => {
      if (res.isSuccess) {
        alert("로그인 되었습니다!");
      } else {
        alert("아이디 및 비밀번호가 일치하지 않습니다!");
      }
    });
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box>
          <Avatar sx={{ mt: 3, mb: 2 }}>
            <LockIcon />
          </Avatar>

          <form onSubmit={onSubmit}>
            <Typography component="h1" varient="h5" style={{ color: "coral" }}>
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
            <Typography component="h1" varient="h5" style={{ color: "coral" }}>
              비밀번호
            </Typography>
            <TextField
              color="warning"
              sx={{ mt: 1, mb: 2 }}
              label="password"
              type="password"
              fullWidth
              name="password"
              autoComplete="current-password"
              required
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="warning" />}
              label="Remember me"
            />
            <Button
              color="warning"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
          </form>
          <Grid container>
            <Grid item xs>
              <Link>비밀번호 찾기</Link>
            </Grid>
            <Grid item>
              <Link>회원가입</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
