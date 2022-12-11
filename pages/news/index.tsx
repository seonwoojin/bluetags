import BlueCardHorizontal from "@components/bluecard/BlueCardHorizontal";
import HomeTitle from "@components/HomeTitle";
import ProjectCircleSlider from "@components/slider/ProjectCircleSlider";
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
`;

const News: NextPage = () => {
  return (
    <Container>
      <HomeTitle subTitle="Subtitle" title="Title" />
    </Container>
  );
};

export default News;
