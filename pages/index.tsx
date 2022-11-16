import HomeTitle from "@components/HomeTitle";
import BlueCardLargeSlider from "@components/slider/BlueCardLargeSlider";
import { NextPage } from "next";
import styled from "styled-components";
import BlueCardHorizontalSlider from "@components/slider/BlueCardHorizontalSlider";
import BlueCardSmall from "@components/BlueCardSmall";

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

const ContextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 100px;
`;

const SlideWrapper = styled.div`
  width: 90%;
  font-size: 4rem;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <ContextWrapper>
        <HomeTitle subTitle="Large" title="BlueCard" />
        <SlideWrapper>
          <BlueCardLargeSlider />
        </SlideWrapper>
      </ContextWrapper>
      <ContextWrapper>
        <HomeTitle subTitle="Horizontal" title="BlueCard" />
        <SlideWrapper>
          <BlueCardHorizontalSlider />
        </SlideWrapper>
      </ContextWrapper>
      <ContextWrapper>
        <HomeTitle subTitle="Small" title="BlueCard" />
        <BlueCardSmall num={1} />
      </ContextWrapper>
    </Container>
  );
};

export default Home;
