import styled from "styled-components";

const TitleContainer = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  padding-left: 10rem;
`;

const SubTitle = styled.div`
  width: 100%;
  height: 4rem;
  font-size: 2rem;
`;

const Title = styled.div`
  width: 100%;
  height: 8rem;
  font-size: 4rem;
`;

interface TitleProps {
  subTitle: string;
  title: string;
}

export default function HomeTitle({ subTitle, title }: TitleProps) {
  return (
    <TitleContainer>
      <SubTitle>{subTitle}</SubTitle>
      <Title>{title}</Title>
    </TitleContainer>
  );
}
