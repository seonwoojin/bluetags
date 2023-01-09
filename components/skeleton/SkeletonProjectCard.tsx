import styled from "styled-components";

const Project = styled.div`
  @keyframes loading {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  width: 435px;
  height: 70px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid rgba(25, 31, 40, 0.1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  animation: loading 1.5s infinite ease-in-out;
`;

const ProjectLogo = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 10px;
  min-width: 146px;
  width: auto;
  height: 39px;
  border-radius: 20px;
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  min-width: 124px;
  width: auto;
  height: 17px;
  background-color: rgba(0, 0, 0, 0.2);
  span {
    line-height: 17px;
    :first-child {
    }
    :last-child {
      margin-left: 10px;
    }
  }
  svg {
    margin-left: 10px;
  }
`;

const ProjectDescription = styled.div`
  min-width: 146px;
  width: auto;
  height: 12px;
  margin-top: 10px;
  font-weight: 300;
  font-size: 16px;
  line-height: 12px;
  color: #191f28;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0.5;
`;

const ProjectChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 43px;
  width: 43px;
  height: 14px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default function SkeletonProjectCard() {
  return (
    <Project>
      <ProjectLogo />
      <ProjectContent>
        <ProjectTitle>
          <span></span>
          <span></span>
        </ProjectTitle>
        <ProjectDescription></ProjectDescription>
      </ProjectContent>
      <ProjectChart></ProjectChart>
      <Button></Button>
    </Project>
  );
}
