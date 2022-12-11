import styled from "styled-components";

const TitleContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.div`
  width: 100%;
  height: 42px;
  font-size: 26px;
  color: #1c1b1b;
  font-weight: lighter;
`;

const SubTitle = styled.div`
  width: 100%;
  font-size: 16px;
  color: rgba(28, 27, 27, 0.5);
  font-weight: bold;
`;

interface TitleProps {
  subTitle: string;
  title: string;
}

export default function HomeTitle({ subTitle, title }: TitleProps) {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </TitleContainer>
  );
}
