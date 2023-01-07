import { breakingPoint } from "constants/breakingPoint";
import styled from "styled-components";

const BlueTags = styled.div<{ color: string; width: string; isWhite: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: 24px;
  margin-right: 10px;
  border-radius: 100px 9px 200px 100px;
  background-color: ${(props) => props.color};
  color: ${(props) => (props.isWhite === "true" ? "#0075FF" : "#fafafa")};
  font-size: 12px;
  font-weight: 600;
  border: ${(props) => (props.isWhite === "true" ? "1px solid #0075ff" : null)};
  box-shadow: 0px 4px 20px rgba(92, 128, 255, 0.1);
  @media ${breakingPoint.device.mobile} {
    justify-content: space-evenly;
    margin-right: 0px;
  }
`;

interface Props {
  color: string;
  width: string;
  isWhite: string;
  text: string;
}

export default function BlueTag({ color, width, isWhite, text }: Props) {
  return (
    <BlueTags color={color} width={width} isWhite={isWhite}>
      {text}
    </BlueTags>
  );
}
