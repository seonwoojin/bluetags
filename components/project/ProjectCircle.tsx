import styled from "styled-components";

const Project = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  cursor: pointer;
`;

export default function ProjectCircle() {
  return <Project />;
}
