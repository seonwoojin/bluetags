import Slider from "react-slick";
import styled from "styled-components";
import ProjectCircle from "@components/ProjectCircle";

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Div = styled.div``;

export default function ProjectCircleSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 900,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 10,
    slidesToScroll: 10,
  };
  return (
    <div>
      <StyledSlider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((card) => (
          <ProjectCircle key={card} />
        ))}
      </StyledSlider>
    </div>
  );
}
