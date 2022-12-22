import HomeTitle from "@components/HomeTitle";
import BlueCardMediumSlider from "@components/slider/BlueCardMediumSlider";
import { NextPage } from "next";
import styled from "styled-components";
import BlueCardHorizontalSlider from "@components/slider/BlueCardHorizontalSlider";
import BlueCardSmall from "@components/bluecard/BlueCardSmall";
import useUser from "@libs/client/useUser";
import useSWR from "swr";
import { BlueCard, Project } from "@prisma/client";
import SkeletonBlueCardMediumSlider from "../components/skeleton/SkeletonBlueCardMeduimSlider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-width: 1500px;
  height: 500vh;
  padding-top: 13rem;
  padding-left: 33rem;
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
  width: 100%;
  font-size: 4rem;
`;

export interface BluecardWithProject extends BlueCard {
  project: Project;
}

interface Response {
  data: {
    bluecards: BluecardWithProject[];
  };
  status: number;
}

const Home: NextPage = () => {
  const user = useUser();
  const { data, isValidating } = useSWR<Response>("/api/bluecards");
  return (
    <Container>
      <ContextWrapper>
        <HomeTitle subTitle="Large" title="BlueCard" />
        <SlideWrapper>
          {isValidating ? (
            <SkeletonBlueCardMediumSlider />
          ) : data ? (
            <BlueCardMediumSlider data={data.data.bluecards} />
          ) : null}
        </SlideWrapper>
      </ContextWrapper>
      <ContextWrapper>
        <HomeTitle subTitle="Horizontal" title="BlueCard" />
        <SlideWrapper>
          {data ? (
            <BlueCardHorizontalSlider data={data.data.bluecards} />
          ) : null}
        </SlideWrapper>
      </ContextWrapper>
      <ContextWrapper>
        <HomeTitle subTitle="Small1" title="BlueCard" />
        <BlueCardSmall num={1} />
      </ContextWrapper>
    </Container>
  );
};

export default Home;
