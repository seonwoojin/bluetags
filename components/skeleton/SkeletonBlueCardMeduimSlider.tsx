import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import BlueCardMedium from "../bluecard/BlueCardMedium";
import { BluecardWithProject } from "pages";

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
    align-items: center;
  }
`;

const Div = styled.div`
  cursor: default;
`;

const BlueCardContainer = styled.div`
  @keyframes loading {
    0% {
      background-position: 0px 0;
    }
    100% {
      background-position: 300px 0;
    }
  }
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 500px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  cursor: pointer;
  margin-bottom: 30px;
  .animationBar {
    background: linear-gradient(
      to right,
      #eeeeee 10%,
      #dddddd 28%,
      #eeeeee 53%
    );
    background-size: 100%;
    animation: loading 2s infinite linear;
  }
`;

const BlueCardBackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 180px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
`;

const BlueCardText = styled.div`
  width: 300px;
  height: auto;
  padding-top: 20px;
  padding-left: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const ProjectLogo = styled.div`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: center center;
`;

const ProjectTitle = styled.div`
  display: flex;
  width: 250px;
  height: 20px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.2);
`;

const PostTitle = styled.div`
  display: -webkit-box;
  align-items: center;
  height: 40px;
  width: 230px;
  font-size: 2rem;
  font-weight: 600;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
`;

const PostDate = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 20px;
  margin-top: 20px;
  margin-left: 10px;
  font-size: 1.2rem;
  opacity: 0.6;
  img {
    margin-left: 10px;
  }
  background-color: rgba(0, 0, 0, 0.2);
`;

const PostContext = styled.div`
  display: -webkit-box;
  width: 280px;
  height: 100%;
  max-height: 70px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2rem;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 40px;
  margin-top: 25px;
  margin-left: 30px;
  bottom: 20px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  svg {
    margin-left: 10px;
    width: 20px;
    fill: white;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export default function SkeletonBlueCardMediumSlider() {
  const settings = {
    nextArrow: <Div></Div>,
    prevArrow: <Div></Div>,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1980,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1644,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1278,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <StyledSlider {...settings}>
        {[1, 2, 3, 4, 5].map(() => (
          <BlueCardContainer>
            <BlueCardBackGround></BlueCardBackGround>
            <BlueCardText>
              <TitleContainer>
                <ProjectLogo />
                <PostTitle></PostTitle>
              </TitleContainer>
              <ProjectTitle></ProjectTitle>
            </BlueCardText>
            <PostContext></PostContext>
            <PostDate></PostDate>
            <Button></Button>
            <Wrapper className="animationBar" />
          </BlueCardContainer>
        ))}
      </StyledSlider>
    </div>
  );
}
