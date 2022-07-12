import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Img } from "../style/styled";

const settings = {
  dots: true,
  Infinity: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
};

const StyledSlider = styled(Slider)`
  .slick-list {
    height: 28rem;
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
        <Img src="/img/carrot.png" />
        <div>
          <Img src="/img/carrot.png" width="700px" />
        </div>
        <div>
          <Img src="/img/carrot.png" width="400px" />
        </div>
      </StyledSlider>
    </>
  );
}
