import BlueCard from "@components/BlueCard";
import HomeTitle from "@components/HomeTitle";
import BlueCardSlider from "@components/BlueCardSlider";
import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 6rem;
  padding-left: 20rem;
`;

const Wrap = styled.div`
  width: 90%;
  height: 20%;
  font-size: 4rem;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <HomeTitle />
      <Wrap>
        <BlueCardSlider />
      </Wrap>
    </Container>
  );
};

export default Home;
