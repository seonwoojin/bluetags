import HomeTitle from "@components/HomeTitle";
import BlueCardMediumSlider from "@components/slider/BlueCardMediumSlider";
import { NextPage } from "next";
import styled from "styled-components";
import useUser from "@libs/client/useUser";
import useSWR from "swr";
import { BlueCard, Project } from "@prisma/client";
import WithHead from "@components/WithHead";
import { breakingPoint } from "constants/breakingPoint";
import Image from "next/image";
import BlueTag from "@components/Bluetag";
import SkeletonBlueCardMedium from "@components/skeleton/SkeletonBlueCardMedium";
import PrjectCard from "@components/project/ProjectCard";
import ProjectCardSlider from "@components/slider/ProejctCardSlider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500vh;
  padding-top: 13rem;
  padding-left: 27rem;
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

const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  max-width: 3300px;
  height: 280px;
  margin-bottom: 60px;
  padding-left: 70px;
  font-family: "Spoqa Han Sans Neo";
  background: linear-gradient(0deg, #2f374b, #2f374b), url(.jpg), url(BG.png);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  @media ${breakingPoint.device.mobile} {
    display: none;
  }
  p {
    color: white;
    font-size: 50px;
    font-weight: 300;
    z-index: 10;
  }
`;

const SlideWrapper = styled.div`
  display: flex;
  width: 100%;
  font-size: 4rem;
  padding-left: 2vw;
  padding-right: 2vw;
`;

const TagBoxName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1200px;
  height: 20px;
  font-size: 17px;
  @media ${breakingPoint.device.mobile} {
    display: none;
  }
`;

const TagBox = styled.div`
  width: 1200px;
  height: 100px;
  margin-bottom: 5vh;
  padding: 20px 30px;
  .mobile {
    display: none;
  }
  @media ${breakingPoint.device.mobile} {
    display: inline-block;
    width: 100vw;
    background-color: #f2f8ff;
    .web {
      display: none;
    }
    .mobile {
      display: flex;
    }
  }
  p {
    font-size: 17px;
  }
`;

const BluetagsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  @media ${breakingPoint.device.mobile} {
    justify-content: space-evenly;
  }
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
      <TagBoxName>Bluetags Filtering</TagBoxName>
      <TagBox>
        <BluetagsWrapper className="mobile">
          <BlueTag
            color="#79B7FF"
            width="100px"
            isWhite="false"
            text="#Bluetag"
          ></BlueTag>
          <BlueTag
            color="#9495FF"
            width="100px"
            isWhite="false"
            text="#Bluetag"
          ></BlueTag>
          <BlueTag
            color="#0075FF"
            width="138px"
            isWhite="false"
            text="#Bluetag"
          ></BlueTag>
        </BluetagsWrapper>
        <BluetagsWrapper className="mobile">
          <BlueTag
            color="#3733FF"
            width="64px"
            isWhite="false"
            text="#Blue"
          ></BlueTag>
          <BlueTag
            color="#499DFF"
            width="175px"
            isWhite="false"
            text="#Bluetag"
          ></BlueTag>
          <BlueTag
            color="#F0F6FF"
            width="100px"
            isWhite="true"
            text="#Bluetag"
          ></BlueTag>
        </BluetagsWrapper>
        <BluetagsWrapper className="web">
          <BlueTag
            color="#79B7FF"
            width="100px"
            isWhite="false"
            text="#Bluetag"
          ></BlueTag>
          <BlueTag
            color="#9495FF"
            width="100px"
            isWhite="false"
            text="#Bluetag"
          ></BlueTag>
          <BlueTag
            color="#0075FF"
            width="138px"
            isWhite="false"
            text="#Bluetag"
          ></BlueTag>
          <BlueTag
            color="#3733FF"
            width="64px"
            isWhite="false"
            text="#Blue"
          ></BlueTag>
          <BlueTag
            color="#499DFF"
            width="175px"
            isWhite="false"
            text="#Bluetag"
          ></BlueTag>
          <BlueTag
            color="#F0F6FF"
            width="100px"
            isWhite="true"
            text="#Bluetag"
          ></BlueTag>
          <BlueTag
            color="#79B7FF"
            width="100px"
            isWhite="false"
            text="#Bluetag"
          ></BlueTag>
          <BlueTag
            color="#9495FF"
            width="100px"
            isWhite="false"
            text="#Bluetag"
          ></BlueTag>
          <BlueTag
            color="#0075FF"
            width="138px"
            isWhite="false"
            text="#Bluetag"
          ></BlueTag>
          <BlueTag
            color="#3733FF"
            width="64px"
            isWhite="false"
            text="#Blue"
          ></BlueTag>
          <BlueTag
            color="#499DFF"
            width="175px"
            isWhite="false"
            text="#Bluetag"
          ></BlueTag>
        </BluetagsWrapper>
      </TagBox>
      <BannerWrapper>
        <p>Inspiring NFT experience</p>
        <p>Bluetags_</p>
        <Image
          alt="banner"
          src="/images/banner.png"
          layout="fill"
          priority={true}
        ></Image>
      </BannerWrapper>
      <ContextWrapper>
        <HomeTitle subTitle="Large" title="BlueCard" />
        <SlideWrapper>
          <BlueCardMediumSlider data={data?.data.bluecards} />
        </SlideWrapper>
      </ContextWrapper>
      <ContextWrapper>
        <HomeTitle subTitle="Large" title="Project" />
        <SlideWrapper>
          <ProjectCardSlider />
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
