import Image from "next/image";
import styled from "styled-components";

const BlueCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 500px;
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
  height: 180px;
  overflow: hidden;
  background-image: url("https://cdn.pixabay.com/photo/2020/04/11/08/26/lake-5029360_960_720.jpg");
  background-size: cover;
  background-position: center center;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.4);
`;

const BlueCardImage = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 5px;
  background-image: url("https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png");
  background-size: cover;
  background-position: center center;
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
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background-color: black;
  background-image: url("https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s168");
  background-size: cover;
  background-position: center center;
`;

const ProjectTitle = styled.div`
  display: flex;
  width: auto;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 600;
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
  opacity: 0.6;
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 240px;
  height: 40px;
  bottom: 20px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #272a2e;
  svg {
    margin-left: 10px;
    width: 20px;
    fill: white;
  }
`;

interface SliderProps {
  num: number;
}

export default function BlueCardLarge({ num }: SliderProps) {
  return (
    <BlueCardContainer>
      <BlueCardBackGround>
        <BlueCardImage />
      </BlueCardBackGround>
      <BlueCardText>
        <TitleContainer>
          <ProjectLogo />
          <PostTitle>{`Title just made ${num}`}</PostTitle>
        </TitleContainer>
        <ProjectTitle>Bored Ape Yacht Club | 22.11.16</ProjectTitle>
        <PostBlueTags>#Announcement #Event</PostBlueTags>
      </BlueCardText>
      <PostContext>
        Soccer Star Neymar.Jr became one of BAYC members! To celebrate this,
        BAYC launched an event giving 2 soccer game tickets to holders.
      </PostContext>
      <PostDate>
        22.10.08 (SAT) ~ 22.10.09 (SUN)
        <Image
          src={
            "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png"
          }
          width={25}
          height={25}
          alt="asd"
        />
      </PostDate>
      <Button>
        Add on calendar
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
        </svg>
      </Button>
    </BlueCardContainer>
  );
}
