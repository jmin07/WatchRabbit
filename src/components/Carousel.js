// import Slider from "react-slick";
// import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Img } from "../style/styled";

// const settings = {
//   dots: true,
//   Infinity: true,
//   speed: 500,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   centerMode: true,
//   centerPadding: "0px",
// };

// const StyledSlider = styled(Slider)`
//   .slick-list {
//     height: 42rem;
//     margin: 0 auto;
//   }

//   .slick-prev:before,
//   .slick-next:before {
//     color: coral;
//   }
// `;

// export default function Carousel() {
//   return (
//     <>
//       <StyledSlider {...settings}>
//         <Img src="/img/carrot.png" />
//         <div>
//           <Img src="/img/carrot.png" width="700px" />
//         </div>
//         <div>
//           <Img src="/img/carrot.png" width="400px" />
//         </div>
//       </StyledSlider>
//     </>
//   );
// }
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Img } from "../style/styled";
const settings = {
  dots: true,
  Infinity: true,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
};
const StyledSlider = styled(Slider)`
  .slick-list {
    height: 42rem;
    margin: 0 auto;
  }
  .slick-prev:before,
  .slick-next:before {
    color: coral;
  }
`;
export default function Carousel() {
  return (
    <>
      <StyledSlider {...settings}>
        <div>
          <h1>
            안녕하세요. 당근마켓의 중고거래 시세를 알려주고 필요한 정보를
            알림주는 <br></br>"감시토끼" 홈페이지 서비스입니다.
          </h1>
          <Img src="/img/WRN.png" />
        </div>
        <div>
          <h1>중고 물품을 조금 더 현명하게 거래하는 방법.</h1>
          <h2>WatchRabbit 홈페이지 서비스</h2>
          WatchRabbit은 "당근마켓"의 거래를 보조하고자 만들어진 홈페이지
          서비스입니다.
          <br></br>
          당근마켓을 이용하는 서비스 이용자들이 겪는 어려움을 돕고자 거래 정보를
          보조합니다.
          <br></br>
          <br></br>
          특정물품을 지역, 가격, 매너온도, 분류 별로 조건을 걸어 찾을 수 있게
          함으로써 더 많은 정보를 한꺼번에 볼 수 있도록 돕습니다. 중고 물품
          "구매자" 들에게는 원하는 물건을 조금 더 편하고 빠르게 찾을 수 있도록
          돕습니다. 중고 물품 "판매자" 들에게는 지역, 시기별 중고물품 거래가를
          알 수 있게하여 적정한 판매가를 선정할 수 있도록 돕습니다.
          <h1>페이지 별로 다른 정보를 제공하여 드립니다.</h1>
          "사이트 안내"는 WatchRabbit 홈페이지 서비스를 이용하는 방법에 대해서
          안내하여 드리며 사이트의 개발 취지와 개발자에 대한 정보를 제공하여
          드립니다.
          <br></br>
          <br></br>
          "간편 데이터"는 간략화된 데이터들을 다양한 방법으로 모아서 추세를
          파악할 수 있도록 도와주는 페이지입니다. 중고거래 게시글의 갯수,
          중고거래 물품의 가격, 그래프로 나타낸 가격과 판매 정보의 시간별 변동,
          추적되고 있는 물품 정보 등에 대한 데이터를 간략하게 1개 페이지에서 볼
          수 있도록 만들었습니다.
          <br></br>
          <br></br>
          "물품 검색"은 가장 핵심적인 기능으로써 검색시간을 기준으로하여 최신
          중고물품 거래를 정리하여 안내합니다. 지역, 동네, 글쓴이, 매너온도,
          글제목, 분류, 물품가격을 기준으로 데이터를 한 곳에 몰아서 정리하였으며
          URL 링크를 만들어 바로 당근마켓 중고거래 게시글 페이지를 새 창에서 열
          수 있도록 조치하였습니다.
          <br></br>
          <br></br>
          "통계 정보"는 시간별로 변동하는 중고거래의 추이를 살펴볼 수 있도록
          그래프로 정보를 제공합니다.
          <br></br>
          <br></br>
          "추적 알림"은 회원가입을 하여 메일을 제공한 회원에 한하여 원하는
          물품의 조건을 등록하여 놓으면 지정된 시간에 해당 중고거래에 속하는
          물건들을 메일로 보내어 중고거래를 놓치지 않고 확인할 수 있도록
          서비스를 제공하는 페이지입니다.
        </div>
        <div>
          <h1>WatchRabbit의 유례</h1>
          <h3>WatchRabbit은 정치학 용어인 WatchDog에서 이름을 따왔습니다.</h3>
          WatchDogs는 정치권력을 견제할 수 있는 "경비견"의 역할을 하는 주체를
          말합니다. 반대로 정치권력을 견제할 수 없는 주체를 SleepingDogs 라고
          부릅니다.<br></br>
          WatchRabbit은 최근 성장하고 있는 중고거래 플랫폼인 "당근마켓"에서
          정보를 웹크롤링하고 데이터를 가공하여 제공하는 서비스입니다.<br></br>
          <br></br>
          그렇기에 당근마켓을 주기적으로 감시하고 정보를 얻어오고 얻어진 정보를
          잘 정리하여 홈페이지 사용자에게 제공하기 위하여 노력합니다.<br></br>
          <br></br>
          WatchRabbit 홈페이지 서비스는 당근마켓을 이용하는 서비스 이용자들에게
          당근마켓 중고거래 플랫폼에서 이루어지는 거래의 게시글 수, 최저가격,
          최고가격, 평균가격, 판매 제품을 리스트로 하여 보여드리며 이 변동 추이
          또한 그래프로 정리하며 보여드린다면 중고거래에 도움이 되리라
          기대합니다.<br></br>
          <br></br>
          <Img src="/img/carrot.png" width="350px" height="350px" />
        </div>
        <div>
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
        </div>
        <div>
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
          도메인설정, API관리, 회원관리, 로그인관리 등을 맡고 있습니다.<br></br>
          <br></br>
        </div>
        <div>
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
        </div>
      </StyledSlider>
    </>
  );
}