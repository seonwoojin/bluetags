import Image from "next/image";
import styled from "styled-components";

const BlueCardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 1066px;
  height: 200px;
  margin-bottom: 50px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  cursor: pointer;
`;

const BlueCardBackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 200px;
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
  width: 816px;
  height: 100%;
  padding: 10px 50px;
  div {
    margin-bottom: 3px;
  }
`;

const CreatedAt = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 20px;
  padding-right: 5px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
`;

const ProjectLogo = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;
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
  font-size: 2rem;
  font-weight: 600;
`;

const PostTitle = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 40%;
  margin-right: 20px;
  font-size: 4rem;
  font-weight: 500;
`;

const PostBlueTags = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 1.5rem;
  opacity: 0.4;
`;

const PostDate = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  img {
    margin-left: 10px;
  }
`;

const Button = styled.button`
  position: absolute;
  width: 70px;
  height: 70px;
  right: 50px;
  border: none;
  border-radius: 10px;
  background-color: #272a2e;
  svg {
    width: 30px;
    fill: white;
  }
`;

interface SliderProps {
  num: number;
}

export default function BlueCardHorizontal({ num }: SliderProps) {
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
      </BlueCardText>
      <Button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
        </svg>
      </Button>
    </BlueCardContainer>
  );
}
