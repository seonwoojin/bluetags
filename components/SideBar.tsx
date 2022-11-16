import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: calc(100vh - 6rem);
  padding: 50px 10px;
  background-color: inherit;
  position: fixed;
  z-index: 99;
  top: 6rem;
  border-right: 2px solid black;
`;

const SideBarTitle = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  padding: 10px;
  width: 100%;
  height: 4rem;
  background-color: ${(props) => (props.isSelected ? "rgba(0,0,0,0.2)" : null)};
  font-size: 2.5rem;
  border-radius: 10px;
  color: black;
  cursor: pointer;
`;

export default function SideBar() {
  return (
    <SideBarWrapper>
      <Link href="/">
        <SideBarTitle isSelected={true}>Home</SideBarTitle>
      </Link>
      <Link href="/news">
        <SideBarTitle isSelected={false}>News</SideBarTitle>
      </Link>
      <Link href="/watchlist">
        <SideBarTitle isSelected={false}>Watchlist</SideBarTitle>
      </Link>
      <Link href="/calendar">
        <SideBarTitle isSelected={false}>Calendar</SideBarTitle>
      </Link>
      <Link href="/subscribe">
        <SideBarTitle isSelected={false}>Subscribe</SideBarTitle>
      </Link>
    </SideBarWrapper>
  );
}
