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
  padding-top: 6rem;
  padding-left: 20rem;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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
`;

const DateFilter = styled.select`
  width: 40%;
  height: 80%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 1.3rem;
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
`;

const WatchList: NextPage = () => {
  return (
    <Container>
      <TopWrapper>
        <FilterContainer>
          <FilterWrapper>
            <BlueTagsFilter>
              <option value={""} disabled hidden>
                BlueTags
              </option>
              <option value={""}>All</option>
              <option value={""}>#Announcement</option>
              <option value={""}>#Event</option>
            </BlueTagsFilter>
          </FilterWrapper>
          <FilterWrapper style={{ justifyContent: "flex-end" }}>
            <DateFilter>
              <option value={""} disabled hidden>
                Date
              </option>
            </DateFilter>
            <SNSFilter>
              <option value={""} disabled hidden>
                SNS
              </option>
            </SNSFilter>
          </FilterWrapper>
        </FilterContainer>
        <ProjectContainer>
          <ProjectCircleSlider />
        </ProjectContainer>
      </TopWrapper>
    </Container>
  );
};

export default WatchList;
