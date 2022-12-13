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
  width: calc(100vw - 27rem);
  height: 90px;
  left: 27rem;
  padding: 0px 80px;
  background-color: inherit;
  position: fixed;
  background-color: white;
  z-index: 50;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 384px;
  height: 40px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  font-size: 1.6rem;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  :focus {
    border: 2px solid rgba(0, 0, 0, 0.8);
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
  margin-left: 17px;
  font-size: 2rem;
  cursor: pointer;
  color: black;
`;

export default function Header() {
  const router = useRouter();
  const user = useUser();
  const { mutate } = useSWRConfig();
  const [signOut, { status }] = useMutation("api/users/sign-out");
  useEffect(() => {
    if (status === 200) {
      mutate("/api/users");
    }
  }, [status, router, mutate]);
  return (
    <NavBarWrapper>
      <SearchForm>
        <SearchInput placeholder="Search..." />
        <SearchButton>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0625 19.0312C5.11875 19.0312 1.09375 15.0063 1.09375 10.0625C1.09375 5.11875 5.11875 1.09375 10.0625 1.09375C15.0063 1.09375 19.0312 5.11875 19.0312 10.0625C19.0312 15.0063 15.0063 19.0312 10.0625 19.0312ZM10.0625 2.40625C5.83625 2.40625 2.40625 5.845 2.40625 10.0625C2.40625 14.28 5.83625 17.7188 10.0625 17.7188C14.2887 17.7188 17.7188 14.28 17.7188 10.0625C17.7188 5.845 14.2887 2.40625 10.0625 2.40625Z"
              fill="#B0B0B0"
            />
            <path
              d="M19.2498 19.906C19.0835 19.906 18.9173 19.8448 18.786 19.7135L17.036 17.9635C16.7823 17.7098 16.7823 17.2898 17.036 17.036C17.2898 16.7823 17.7098 16.7823 17.9635 17.036L19.7135 18.786C19.9673 19.0398 19.9673 19.4598 19.7135 19.7135C19.5823 19.8448 19.416 19.906 19.2498 19.906Z"
              fill="#B0B0B0"
            />
          </svg>
        </SearchButton>
      </SearchForm>
      <UserContainer>
        <UserText>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="8" fill="#FAFAFA" />
            <path
              d="M20.0199 28.5299C17.6899 28.5299 15.3599 28.1599 13.1499 27.4199C12.3099 27.1299 11.6699 26.5399 11.3899 25.7699C11.0999 24.9999 11.1999 24.1499 11.6599 23.3899L12.8099 21.4799C13.0499 21.0799 13.2699 20.2799 13.2699 19.8099V16.9199C13.2699 13.1999 16.2999 10.1699 20.0199 10.1699C23.7399 10.1699 26.7699 13.1999 26.7699 16.9199V19.8099C26.7699 20.2699 26.9899 21.0799 27.2299 21.4899L28.3699 23.3899C28.7999 24.1099 28.8799 24.9799 28.5899 25.7699C28.2999 26.5599 27.6699 27.1599 26.8799 27.4199C24.6799 28.1599 22.3499 28.5299 20.0199 28.5299ZM20.0199 11.6699C17.1299 11.6699 14.7699 14.0199 14.7699 16.9199V19.8099C14.7699 20.5399 14.4699 21.6199 14.0999 22.2499L12.9499 24.1599C12.7299 24.5299 12.6699 24.9199 12.7999 25.2499C12.9199 25.5899 13.2199 25.8499 13.6299 25.9899C17.8099 27.3899 22.2399 27.3899 26.4199 25.9899C26.7799 25.8699 27.0599 25.5999 27.1899 25.2399C27.3199 24.8799 27.2899 24.4899 27.0899 24.1599L25.9399 22.2499C25.5599 21.5999 25.2699 20.5299 25.2699 19.7999V16.9199C25.2699 14.0199 22.9199 11.6699 20.0199 11.6699Z"
              fill="#676767"
            />
            <path
              d="M21.8801 11.9397C21.8101 11.9397 21.7401 11.9297 21.6701 11.9097C21.3801 11.8297 21.1001 11.7697 20.8301 11.7297C19.9801 11.6197 19.1601 11.6797 18.3901 11.9097C18.1101 11.9997 17.8101 11.9097 17.6201 11.6997C17.4301 11.4897 17.3701 11.1897 17.4801 10.9197C17.8901 9.86969 18.8901 9.17969 20.0301 9.17969C21.1701 9.17969 22.1701 9.85969 22.5801 10.9197C22.6801 11.1897 22.6301 11.4897 22.4401 11.6997C22.2901 11.8597 22.0801 11.9397 21.8801 11.9397Z"
              fill="#676767"
            />
            <path
              d="M20.02 30.8096C19.03 30.8096 18.07 30.4096 17.37 29.7096C16.67 29.0096 16.27 28.0496 16.27 27.0596H17.77C17.77 27.6496 18.01 28.2296 18.43 28.6496C18.85 29.0696 19.43 29.3096 20.02 29.3096C21.26 29.3096 22.27 28.2996 22.27 27.0596H23.77C23.77 29.1296 22.09 30.8096 20.02 30.8096Z"
              fill="#676767"
            />
            {true ? (
              <circle cx="26.5" cy="12.5" r="4" fill="#F3802D" stroke="white" />
            ) : null}
          </svg>
        </UserText>
        <UserText>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="8" fill="#DDDDDD" />
          </svg>
        </UserText>
        <UserText>{user.user?.email}</UserText>
        <UserText>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9202 8.17969H11.6902H6.08024C5.12024 8.17969 4.64024 9.33969 5.32024 10.0197L10.5002 15.1997C11.3302 16.0297 12.6802 16.0297 13.5102 15.1997L15.4802 13.2297L18.6902 10.0197C19.3602 9.33969 18.8802 8.17969 17.9202 8.17969Z"
              fill="#3A6FF8"
            />
          </svg>
        </UserText>
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
