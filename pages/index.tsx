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
import Head from "next/head";
import WithHead from "@components/WithHead";
import { breakingPoint } from "constants/breakingPoint";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-width: 1500px;
  height: 500vh;
  padding-top: 13rem;
  padding-left: 33rem;
  @media ${breakingPoint.device.mobile} {
    min-width: 0px;
    padding-top: 50px;
    padding-left: 0px;
  }
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

const TagBox = styled.div`
  display: none;
  width: 100%;
  height: 100px;
  margin-bottom: 5vh;
  padding: 20px 30px;
  background-color: #f2f8ff;
  @media ${breakingPoint.device.mobile} {
    display: inline-block;
  }
`;

const BluetagsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const BlueTag = styled.div<{ color: string; width: string; white: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: 24px;
  border-radius: 100px 9px 200px 100px;
  background-color: ${(props) => props.color};
  color: ${(props) => (props.white === "true" ? "#0075FF" : "#fafafa")};
  font-size: 12px;
  font-weight: 600;
  border: ${(props) => (props.white === "true" ? "1px solid #0075ff" : null)};
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
      <TagBox>
        <BluetagsWrapper>
          <BlueTag color="#79B7FF" width="100px" white="false">
            #Bluetag
          </BlueTag>
          <BlueTag color="#9495FF" width="100px" white="false">
            #Bluetag
          </BlueTag>
          <BlueTag color="#0075FF" width="138px" white="false">
            #Bluetag
          </BlueTag>
        </BluetagsWrapper>
        <BluetagsWrapper>
          <BlueTag color="#3733FF" width="64px" white="false">
            #Blue
          </BlueTag>
          <BlueTag color="#499DFF" width="175px" white="false">
            #Bluetag
          </BlueTag>
          <BlueTag color="#F0F6FF" width="100px" white="true">
            #Bluetag
          </BlueTag>
        </BluetagsWrapper>
      </TagBox>
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
      {/* <ContextWrapper>
        <HomeTitle subTitle="Horizontal" title="BlueCard" />
        <SlideWrapper>
          {data ? (
            <BlueCardHorizontalSlider data={data.data.bluecards} />
          ) : null}
        </SlideWrapper>
      </ContextWrapper>
      <ContextWrapper>
        <HomeTitle subTitle="Small" title="BlueCard" />
        <BlueCardSmall num={1} />
      </ContextWrapper> */}
    </Container>
  );
};

export default WithHead(
  Home,
  "Bluetags",
  "",
  "",
  "블루태그에서 다양한 NFT 정보를 만나보세요"
);
