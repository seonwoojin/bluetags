import styled, { keyframes } from "styled-components";

const BlueCardContainer = styled.div`
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
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 336px;
  height: 480px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  cursor: pointer;
  margin-bottom: 30px;
  animation: loading 1.5s infinite ease-in-out;
`;

const BlueCardBackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 336px;
  height: 180px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
`;

const BlueCardText = styled.div`
  width: 300px;
  height: auto;
  padding-top: 20px;
  padding-left: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const ProjectLogo = styled.div`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: center center;
`;

const ProjectTitle = styled.div`
  display: flex;
  width: 250px;
  height: 20px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.2);
`;

const PostTitle = styled.div`
  display: -webkit-box;
  align-items: center;
  height: 40px;
  width: 230px;
  font-size: 2rem;
  font-weight: 600;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
`;

const PostDate = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 20px;
  margin-top: 20px;
  margin-left: 10px;
  font-size: 1.2rem;
  opacity: 0.6;
  img {
    margin-left: 10px;
  }
  background-color: rgba(0, 0, 0, 0.2);
`;

const PostContext = styled.div`
  display: -webkit-box;
  width: 280px;
  height: 100px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2rem;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
`;

const PostBlueTags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 20%;
  font-size: 1.5rem;
  opacity: 0.4;
  margin-bottom: 10px;
`;

const BlueTags = styled.div<{ width: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: 24px;
  margin-right: 10px;
  border-radius: 100px 9px 200px 100px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default function SkeletonBlueCardMedium() {
  return (
    <BlueCardContainer>
      <BlueCardBackGround></BlueCardBackGround>
      <BlueCardText>
        <TitleContainer>
          <ProjectLogo />
          <PostTitle></PostTitle>
        </TitleContainer>
      </BlueCardText>
      <PostContext></PostContext>
      <PostBlueTags>
        <BlueTags width="100px"></BlueTags>
        <BlueTags width="150px"></BlueTags>
      </PostBlueTags>
    </BlueCardContainer>
  );
}
