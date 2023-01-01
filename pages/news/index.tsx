import BlueCardHorizontal from "@components/bluecard/BlueCardHorizontal";
import HomeTitle from "@components/HomeTitle";
import ProjectCircleSlider from "@components/slider/ProjectCircleSlider";
import WithHead from "@components/WithHead";
import { breakingPoint } from "constants/breakingPoint";
import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-width: 1500px;
  height: 500vh;
  padding-top: 15rem;
  padding-left: 20rem;
  @media ${breakingPoint.device.mobile} {
    min-width: 0px;
  }
`;

const News: NextPage = () => {
  return (
    <Container>
      <HomeTitle subTitle="Subtitle" title="Title" />
    </Container>
  );
};

export default WithHead(
  News,
  "Bluetags",
  "News",
  "news",
  "블루태그에서 다양한 NFT 정보를 만나보세요"
);
