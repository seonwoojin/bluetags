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
  padding-top: 6rem;
  padding-left: 20rem;
  @media ${breakingPoint.device.mobile} {
    min-width: 0px;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 20rem;
  margin-bottom: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40%;
`;

const ProjectContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 0 50px;
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 10px 30px;
`;

const BlueTagsFilter = styled.select`
  width: 40%;
  height: 80%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const DateFilter = styled.select`
  width: 40%;
  height: 80%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 1.3rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const SNSFilter = styled.select`
  width: 40%;
  height: 80%;
  padding: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 1.3rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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

const WatchList: NextPage = () => {
  return (
    <Container>
      <TopWrapper>
        <FilterContainer>
          <FilterWrapper>
            <BlueTagsFilter>
              <option value={""} hidden>
                BlueTags
              </option>
              <option value={""}>All</option>
              <option value={""}>#Announcement</option>
              <option value={""}>#Event</option>
            </BlueTagsFilter>
          </FilterWrapper>
          <FilterWrapper style={{ justifyContent: "flex-end" }}>
            <DateFilter>
              <option value={""} hidden>
                Date
              </option>
            </DateFilter>
            <SNSFilter>
              <option value={""} hidden>
                SNS
              </option>
            </SNSFilter>
          </FilterWrapper>
        </FilterContainer>
        <ProjectContainer>
          <ProjectCircleSlider />
        </ProjectContainer>
      </TopWrapper>
      <ContextWrapper>
        <HomeTitle subTitle="Subtitle" title="Title" />
      </ContextWrapper>
    </Container>
  );
};

export default WithHead(
  WatchList,
  "Bluetags",
  "WatchList",
  "watchlist",
  "?????????????????? ????????? NFT ????????? ???????????????"
);
