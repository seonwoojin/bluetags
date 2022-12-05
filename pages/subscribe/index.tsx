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

const WatchList: NextPage = () => {
  return (
    <Container>
      <Calendar locale="kr" value={new Date()} />
    </Container>
  );
};

export default WatchList;
