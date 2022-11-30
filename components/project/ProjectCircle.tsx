import styled from "styled-components";

const Project = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export default function ProjectCircle() {
  return <Project />;
}
