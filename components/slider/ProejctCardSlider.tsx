import Slider from "react-slick";
import styled from "styled-components";
import BlueCardMedium from "../bluecard/BlueCardMedium";
import { BluecardWithProject } from "pages";
import { breakingPoint } from "constants/breakingPoint";
import SkeletonBlueCardMedium from "@components/skeleton/SkeletonBlueCardMedium";
import ProjectCard from "@components/project/ProjectCard";

// mobile: `screen and (max-width: 1024px)`,
// tablet: `screen and (max-width: 1200px)`,
// laptop: `screen and (max-width: 1280px)`,
// desktop: `screen and (max-width: 1920px)`,
const Wrapper = styled.div`
  width: 100%;
`;
const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
    padding: 0px 20px;
    gap: 20px;
    align-items: center;
    @media ${breakingPoint.device.mobile} {
      justify-content: center;
      padding: 0px 0px;
    }
  }
`;

const Div = styled.div`
  cursor: default;
`;

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", backgroundColor: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

interface Data {
  data: BluecardWithProject[] | undefined;
}

export default function ProjectCardSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 4,
    slidesPerRow: 3,
    nextArrow: <Div></Div>,
    prevArrow: <Div></Div>,
    responsive: [
      {
        breakpoint: 2160,
        settings: {
          rows: 3,
          slidesPerRow: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1720,
        settings: {
          rows: 2,
          slidesPerRow: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          rows: 1,
          slidesPerRow: 4,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <StyledSlider {...settings}>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
          (value, index) => (
            <ProjectCard key={index} />
          )
        )}
      </StyledSlider>
    </Wrapper>
  );
}
