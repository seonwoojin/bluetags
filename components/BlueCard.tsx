import Image from "next/image";
import styled from "styled-components";

const BlueCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 336px;
  height: 386px;
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
  width: 336px;
  height: 180px;
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
  width: 336px;
  height: 110px;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 0 0 25px;
`;

const ProjectLogo = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background-color: black;
  background-image: url("https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s168");
  background-size: cover;
  background-position: center center;
`;

const PostTitleContainer = styled.div`
  width: 250px;
  height: 60px;
`;

const PostTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40%;
  font-size: 1.8rem;
  font-weight: 600;
`;

const PostBlueTags = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 1.1rem;
  opacity: 0.4;
`;

const PostDate = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40%;
  font-size: 1.1rem;
  img {
    margin-left: 10px;
  }
`;

const PostContext = styled.div`
  width: 280px;
  height: 100px;
  padding-top: 10px;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2rem;
`;

interface SliderProps {
  num: number;
}

export default function BlueCard({ num }: SliderProps) {
  return (
    <BlueCardContainer>
      <BlueCardBackGround>
        <BlueCardImage />
      </BlueCardBackGround>
      <BlueCardText>
        <CreatedAt>24m ago</CreatedAt>
        <TitleContainer>
          <ProjectLogo />
          <PostTitleContainer>
            <PostTitle>{num}</PostTitle>
            <PostBlueTags>#Announcement # Event</PostBlueTags>
            <PostDate>
              Date : 22.10.08 (SAT) ~ 22.10.09 (SUN)
              <Image
                src={
                  "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png"
                }
                width={18}
                height={18}
                alt="asd"
              />
            </PostDate>
          </PostTitleContainer>
        </TitleContainer>
      </BlueCardText>
      <hr style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "85%" }} />
      <PostContext>
        Soccer Star Neymar.Jr became one of BAYC members! To celebrate this,
        BAYC launched an event giving 2 soccer game tickets to holders.
      </PostContext>
    </BlueCardContainer>
  );
}
