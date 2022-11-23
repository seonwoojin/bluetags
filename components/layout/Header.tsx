import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import useUser from "@libs/client/useUser";
import useMutation from "./../../libs/client/useMutation";
import { useSWRConfig } from "swr";
import { useEffect } from "react";

/** NavBar 전체 div */
const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 6rem;
  padding: 0 3rem;
  background-color: inherit;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  position: fixed;
  background-color: white;
  z-index: 99;
`;

const Logo = styled.img`
  width: 12rem;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 4.5rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  font-size: 1.6rem;
  border: none;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  :focus {
    border: 0.5px solid black;
  }
`;

const SearchButton = styled.button`
  width: 4rem;
  height: 4rem;
  border: none;
  background-color: inherit;
  position: absolute;
  right: 1rem;
  cursor: pointer;
  svg {
    width: 80%;
  }
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: auto;
  height: 4.5rem;
`;

const UserText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  margin-left: 30px;
  font-size: 2rem;
  cursor: pointer;
  color: black;
`;

export default function Header() {
  const router = useRouter();
  const user = useUser();
  const { mutate } = useSWRConfig();
  const [signOut, { status }] = useMutation("api/users/signout");
  useEffect(() => {
    if (status === 200) {
      mutate("/api/users");
    }
  }, [status, router]);
  return (
    <NavBarWrapper>
      <Link href={"/"}>
        <Logo src={"/vercel.svg"} />
      </Link>
      <SearchForm>
        <SearchInput placeholder="검색" />
        <SearchButton>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z" />
          </svg>
        </SearchButton>
      </SearchForm>
      <UserContainer>
        <Link href={"/docs"}>
          <UserText>Docs</UserText>
        </Link>
        {user.user ? (
          <UserText
            onClick={() => {
              signOut({});
            }}
          >
            Sign Out
          </UserText>
        ) : (
          <Link href={"/signin"}>
            <UserText>Sign In</UserText>
          </Link>
        )}
      </UserContainer>
    </NavBarWrapper>
  );
}
