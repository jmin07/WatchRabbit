import { Container, Grid, Box, Divider, Avatar } from "@mui/material";
import { Img } from "../style/styled";

export default function Footer() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box sx={{ color: "dimgray", p: 5, pt: 0 }}>
              name : 홍승진
              <br />
              email : ghdtkdbs12@naver.com
            </Box>
            {/* <div>
            <Img src="/img/comdoge.jpg" width="300px" height="300px" />
            <h1>개발자 알림</h1>
            <h1>Agent - Hong</h1>
            name : 홍승진<br></br>
            E-mail : ghdtkdbs12@naver.com<br></br>
            Github : https://github.com/ghdtkdbs12<br></br>
            <br></br>
            WatchRabbit 서비스를 개발하는데 참여한 웹개발자입니다.<br></br>
            <br></br>
            WatchRabbit 을 개발한 개발팀 "당근이-조아"의 프로젝트 매니저, 기획,
            문서작성, 웹크롤링코드를 담당하였습니다.<br></br>
            <br></br>
          </div> */}
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ color: "dimgray", p: 5, pt: 0 }}>
              name : 백종민
              <br />
              email : jmbaek07@gmail.com
            </Box>
            {/* <div>
            <Img src="/img/bak.png" width="300px" height="300px" />
            <h1>개발자 알림</h1>
            <h1>Agent - Bak </h1>
            name : 백종민<br></br>
            E-mail : jmbaek07@gmail.com<br></br>
            Github : https://github.com/jmin07<br></br>
            Blog : https://jm-baek.tistory.com/<br></br>
            <br></br>
            WatchRabbit 서비스를 개발하는데 참여한 웹개발자입니다.<br></br>
            <br></br>
            WatchRabbit 을 개발한 개발팀 "당근이-조아"의 백엔드, 서버구축,
            도메인설정, API관리, 회원관리, 로그인관리 등을 맡고 있습니다.
            <br></br>
            <br></br>
          </div> */}
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ color: "dimgray", p: 5, pt: 0 }}>
              name : 박경준
              <br />
              email : pgj127@gmail.com
            </Box>
            {/* <div>
            <Img src="/img/park.png" width="300px" height="300px" />
            <h1>개발자 알림</h1>
            <h1>Agent - Park</h1>
            name : 박경준<br></br>
            E-mail : pgj127@gmail.com<br></br>
            Github : https://github.com/PGjun<br></br>
            <br></br>
            WatchRabbit 서비스를 개발하는데 참여한 웹개발자입니다.<br></br>
            <br></br>
            WatchRabbit 을 개발한 개발팀 "당근이-조아"의 프론트엔드 페이지 및
            디자인 관리, 데이터 관리를 맡고 있습니다.<br></br>
            <br></br>
          </div> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
