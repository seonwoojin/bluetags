import Image from "next/image";
import styled from "styled-components";

const BlueCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  cursor: pointer;
  margin-bottom: 30px;
`;

const BlueCardBackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  min-height: 180px;
  overflow: hidden;
  background-image: url("https://cdn.pixabay.com/photo/2020/04/11/08/26/lake-5029360_960_720.jpg");
  background-size: cover;
  background-position: center center;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.4);
`;

const BlueCardImage = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 5px;
  background-image: url("https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png");
  background-size: cover;
  background-position: center center;
`;

const BlueCardText = styled.div`
  width: 300px;
  height: auto;
  margin-bottom: 10px;
  padding-top: 20px;
  padding-left: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  img {
    margin-left: 10px;
  }
`;

const PostTitle = styled.div`
  display: -webkit-box;
  align-items: center;
  height: auto;
  width: 300px;
  padding-right: 10px;
  font-size: 2rem;
  font-weight: 600;
  line-height: 25px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
`;

const PostBlueTags = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 1.5rem;
  opacity: 0.4;
  margin-bottom: 10px;
`;

const PostDate = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: auto;
  font-size: 1.2rem;
  img {
    margin-left: 10px;
  }
`;

const PostContext = styled.div`
  width: 280px;
  height: auto;
  margin-bottom: 10px;
  padding-top: 10px;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2rem;
`;

const Button = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  right: 20px;
  border: none;
  border-radius: 10px;
  background-color: #272a2e;
  svg {
    width: 20px;
    fill: white;
  }
`;

interface SliderProps {
  num: number;
}

export default function BlueCardSmall({ num }: SliderProps) {
  return (
    <BlueCardContainer>
      <BlueCardBackGround>
        <BlueCardImage />
      </BlueCardBackGround>
      <BlueCardText>
        <TitleContainer>
          <PostTitle>{`Soccer Star Neymar.Jr became one of BAYC members! To celebrate this,
        BAYC launched an event giving 2 `}</PostTitle>
        </TitleContainer>
        <ProjectTitle>
          22.11.16
          <Image
            src={
              "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png"
            }
            width={25}
            height={25}
            alt="asd"
          />
        </ProjectTitle>
        <PostBlueTags>#Announcement #Event</PostBlueTags>
      </BlueCardText>
      <PostDate>
        22.10.08 (SAT) ~ 22.10.09 (SUN)
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
          </svg>
        </Button>
      </PostDate>
    </BlueCardContainer>
  );
}
