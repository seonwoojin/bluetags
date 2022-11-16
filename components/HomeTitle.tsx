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
  font-size: 3rem;
`;

const Title = styled.div`
  width: 100%;
  height: 8rem;
  font-size: 6rem;
`;

export default function HomeTitle() {
  return (
    <TitleContainer>
      <SubTitle>Subtitle</SubTitle>
      <Title>Title</Title>
    </TitleContainer>
  );
}
