import WithHead from "@components/WithHead";
import { NextPage } from "next";
import { Calendar } from "react-calendar";
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

const Subscribe: NextPage = () => {
  return (
    <Container>
      <Calendar locale="kr" value={new Date()} />
    </Container>
  );
};

export default WithHead(
  Subscribe,
  "Bluetags",
  "Subscribe",
  "subscribe",
  "블루태그에서 다양한 NFT 정보를 만나보세요"
);
