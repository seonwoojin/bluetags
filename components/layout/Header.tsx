import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import useUser from "@libs/client/useUser";
import useMutation from "./../../libs/client/useMutation";
import { useSWRConfig } from "swr";
import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { breakingPoint } from "constants/breakingPoint";

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 27rem);
  height: 70px;
  left: 27rem;
  padding: 0px 80px;
  position: fixed;
  background-color: white;
  z-index: 50;
  @media ${breakingPoint.device.mobile} {
    width: 100vw;
    height: 50px;
    left: 0rem;
    padding: 0px 0px;
    position: fixed;
    background-color: white;
  }
`;

const Logo = styled.div`
  width: 170px;
  margin-left: 8vw;
  display: none;
  @media ${breakingPoint.device.mobile} {
    display: block;
  }
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
  border-radius: 4px;
  background: rgba(55, 51, 255, 0.06);
  color: #3733ff;
  :focus {
    border: 2px solid rgba(55, 51, 255, 0.2);
  }
  @media ${breakingPoint.device.mobile} {
    display: none;
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
  @media ${breakingPoint.device.mobile} {
    height: 100%;
    margin-right: 8vw;
  }
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
  color: #1c1c1c;
  a {
    color: #1c1c1c;
  }
  @media ${breakingPoint.device.mobile} {
    display: none;
  }
`;

const UserTextMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 2rem;
  cursor: pointer;
  display: none;
  @media ${breakingPoint.device.mobile} {
    display: contents;
  }
`;

const UserProfile = styled.div<{ profile: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url(${(props) => props.profile});
  background-position: center center;
  background-size: cover;
`;

export default function Header() {
  const router = useRouter();
  const user = useUser();
  const { mutate } = useSWRConfig();
  const [logOut, { status }] = useMutation("api/users/sign-out");
  useEffect(() => {
    if (status === 200) {
      mutate("/api/users");
    }
  }, [status, router, mutate]);
  return (
    <NavBarWrapper>
      <Logo>
        <Link href={"/"}>
          <svg
            viewBox="0 0 90 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_556_5467)">
              <path
                d="M24.1391 0.999023C25.5472 0.999023 26.6518 1.29284 27.4592 1.86741C28.2667 2.44851 28.6736 3.34954 28.6736 4.55744C28.6736 5.31483 28.5057 5.96775 28.1698 6.5162C27.8339 7.06466 27.3623 7.49559 26.7681 7.80899C26.1673 8.12239 25.4633 8.30521 24.6429 8.35744L24.3716 7.35847C25.3147 7.38459 26.1609 7.55435 26.9102 7.86775C27.6595 8.18115 28.2538 8.61861 28.693 9.18012C29.1322 9.74163 29.3519 10.4076 29.3519 11.1781C29.3519 11.8832 29.2291 12.4839 28.9772 12.9867C28.7253 13.4894 28.3765 13.9007 27.9308 14.2207C27.4851 14.5406 26.9877 14.7757 26.4386 14.9258C25.8896 15.076 25.3082 15.1543 24.701 15.1543H20.5347V0.999023H24.1391ZM23.9388 7.18871C24.714 7.18871 25.2759 6.97325 25.6247 6.54232C25.9736 6.11139 26.148 5.58906 26.148 4.97531C26.148 4.21792 25.9219 3.66947 25.4697 3.32995C25.0175 2.99043 24.4104 2.82067 23.6481 2.82067H21.8266V7.18871H23.9388ZM24.0163 13.398C24.546 13.398 25.024 13.3196 25.4503 13.1629C25.8767 13.0062 26.219 12.7647 26.4709 12.4317C26.7229 12.0987 26.8456 11.6939 26.8456 11.2042C26.8456 10.6557 26.7035 10.2248 26.4128 9.91139C26.1221 9.59799 25.7475 9.36947 25.2953 9.23236C24.8431 9.09524 24.3781 9.02342 23.9001 9.02342H21.8266V13.3915H24.0163V13.398Z"
                fill="#0075FF"
              />
              <path d="M31.3804 0H33.2019V15.1608H31.3804V0Z" fill="#0075FF" />
              <path
                d="M37.8073 15.1607C37.058 15.1607 36.4444 14.9387 35.9793 14.4816C35.5077 14.0311 35.2558 13.45 35.23 12.7318V6.73797H37.0516V12.0854C37.0774 12.5163 37.2066 12.8754 37.4391 13.1497C37.6717 13.4304 38.0334 13.5806 38.5243 13.5936C38.9636 13.5936 39.3576 13.4565 39.7193 13.1888C40.0746 12.9211 40.3588 12.5555 40.5784 12.0919C40.7981 11.6284 40.9079 11.0995 40.9079 10.5119V6.73145H42.7101V14.8407H41.0629L40.9079 12.8428L41.0241 13.2149C40.8562 13.5806 40.6172 13.9136 40.3071 14.2009C39.9971 14.4947 39.6289 14.7297 39.1961 14.8995C38.7633 15.0692 38.3047 15.1541 37.8138 15.1541L37.8073 15.1607Z"
                fill="#0075FF"
              />
              <path
                d="M47.742 14.8932C46.8828 14.5733 46.2046 14.1293 45.7072 13.5547C45.2163 12.9802 44.9062 12.3207 44.7835 11.5895C44.6608 10.8582 44.7448 10.1008 45.0225 9.31076C45.3003 8.52072 45.7266 7.95268 46.3338 7.47605C46.941 6.99942 47.6192 6.69907 48.3814 6.56196C49.1437 6.42485 49.9188 6.5032 50.6939 6.78395C51.6887 7.14959 52.4122 7.75028 52.8514 8.57949C53.2907 9.4087 53.4521 10.3815 53.323 11.5046L46.3015 11.4262L46.2627 10.264L52.0246 10.2379L51.5853 10.3685C51.5853 9.91145 51.4691 9.46746 51.2365 9.04959C51.004 8.63172 50.61 8.31832 50.0674 8.11591C49.6087 7.94615 49.1566 7.90698 48.7173 7.99839C48.2781 8.0898 47.8905 8.28567 47.5417 8.59907C47.1929 8.91248 46.9281 9.32382 46.7472 9.83962C46.5663 10.3554 46.5017 10.8517 46.5663 11.3348C46.6309 11.818 46.8183 12.2424 47.1154 12.608C47.4125 12.9736 47.8065 13.2479 48.2975 13.4242C48.6269 13.5417 48.9628 13.6004 49.3181 13.5939C49.6733 13.5874 50.0222 13.5352 50.371 13.4372L50.681 14.9912C50.2095 15.1087 49.7121 15.1675 49.1889 15.1544C48.6657 15.1413 48.1747 15.0499 47.729 14.8867L47.742 14.8932Z"
                fill="#0075FF"
              />
              <path
                d="M56.4363 3.48633H58.2772V7.09045H60.467V8.52035H58.2772V15.1606H56.4363V8.52035H54.9829V7.09045H56.4363V3.48633Z"
                fill="#0075FF"
              />
              <path
                d="M66.0999 15.1606C65.3506 15.1606 64.6724 14.9974 64.0522 14.6709C63.4321 14.3445 62.9477 13.8678 62.5924 13.228C62.2307 12.5946 62.0498 11.8176 62.0498 10.9101C62.0498 10.0025 62.2371 9.2125 62.6118 8.55957C62.9864 7.90665 63.4903 7.4039 64.1233 7.05133C64.7563 6.69875 65.4475 6.52246 66.1968 6.52246C66.9461 6.52246 67.5791 6.69875 68.1088 7.0448C68.632 7.39085 69.026 7.79566 69.278 8.27229L69.1617 8.5661L69.3361 6.86198H71.0027V14.9713H69.2005V12.8558L69.4136 13.3259C69.349 13.4565 69.2263 13.6262 69.0454 13.8286C68.8646 14.0311 68.632 14.2335 68.3543 14.4424C68.0765 14.6513 67.7535 14.8211 67.3789 14.9582C67.0042 15.0953 66.5779 15.1671 66.0999 15.1671V15.1606ZM66.5844 13.6524C67.0365 13.6524 67.4435 13.5675 67.8052 13.3977C68.1669 13.228 68.4641 12.9864 68.7031 12.673C68.9421 12.3596 69.1036 11.9939 69.2005 11.5761V9.98947C69.0971 9.59772 68.9162 9.2582 68.6579 8.95786C68.3995 8.66404 68.0894 8.43552 67.7277 8.27229C67.366 8.10906 66.9719 8.02418 66.5456 8.02418C66.0547 8.02418 65.609 8.14171 65.2085 8.37676C64.808 8.61181 64.485 8.93827 64.2525 9.35614C64.0135 9.77401 63.8908 10.2637 63.8908 10.8252C63.8908 11.3475 64.0135 11.8242 64.259 12.2551C64.5044 12.686 64.8338 13.0256 65.2473 13.2737C65.6607 13.5218 66.1064 13.6458 66.5844 13.6458V13.6524Z"
                fill="#0075FF"
              />
              <path
                d="M77.6172 18.9998C77.0229 18.9998 76.4933 18.928 76.0346 18.7843C75.576 18.6407 75.1626 18.4448 74.7944 18.1967C74.4262 17.9486 74.071 17.6744 73.7157 17.374L74.7815 16.1204C75.2078 16.5122 75.6406 16.819 76.0799 17.041C76.5191 17.263 77.01 17.374 77.5526 17.374C78.1598 17.374 78.6701 17.2695 79.09 17.0737C79.5098 16.8713 79.8264 16.597 80.0395 16.2445C80.2527 15.8919 80.3625 15.4805 80.3819 15.0104L80.4013 12.8166L80.5563 13.1692C80.3237 13.7307 79.9039 14.2008 79.2967 14.586C78.6895 14.9713 77.9531 15.1606 77.0875 15.1606C76.3641 15.1606 75.6923 14.9713 75.0722 14.5926C74.4521 14.2139 73.9547 13.6981 73.58 13.0582C73.2054 12.4118 73.0181 11.6805 73.0181 10.8709C73.0181 10.0613 73.2119 9.27126 73.5994 8.61834C73.987 7.96542 74.5037 7.45614 75.1368 7.08397C75.7763 6.71181 76.4739 6.52246 77.2232 6.52246C77.9337 6.52246 78.5797 6.67263 79.1675 6.96645C79.7553 7.26026 80.1881 7.63243 80.4788 8.08947L80.3625 8.42246L80.5369 6.85545H82.2035V15.0235C82.2035 15.7548 82.0161 16.4207 81.6479 17.0214C81.2797 17.6221 80.7501 18.1053 80.0589 18.4644C79.3677 18.8235 78.5538 19.0063 77.6108 19.0063L77.6172 18.9998ZM74.8461 10.8317C74.8461 11.3541 74.9753 11.8307 75.2207 12.2616C75.4727 12.6926 75.8086 13.0321 76.2284 13.2802C76.6483 13.5283 77.1069 13.6524 77.6108 13.6524C78.1146 13.6524 78.5215 13.5609 78.9027 13.3847C79.2838 13.2084 79.6003 12.9603 79.8651 12.6534C80.1235 12.34 80.3044 11.9939 80.4077 11.6152V9.98947C80.2914 9.59772 80.0977 9.2582 79.8264 8.97091C79.5551 8.68363 79.2321 8.45511 78.8574 8.28535C78.4828 8.11559 78.0694 8.03071 77.6172 8.03071C77.1134 8.03071 76.6483 8.14823 76.2349 8.38982C75.815 8.6314 75.4791 8.96439 75.2272 9.38226C74.9753 9.80012 74.8526 10.2833 74.8526 10.8317H74.8461Z"
                fill="#0075FF"
              />
              <path
                d="M86.8803 15.1607C86.3118 15.1607 85.7563 15.0562 85.2266 14.8538C84.6905 14.6514 84.2448 14.3511 83.896 13.9463L84.6518 12.8885C85.0006 13.215 85.3494 13.4631 85.6982 13.6198C86.047 13.7765 86.3958 13.8679 86.7446 13.8679C87.003 13.8679 87.242 13.8353 87.4616 13.77C87.6812 13.7047 87.8557 13.5937 87.9913 13.437C88.127 13.2803 88.198 13.0779 88.198 12.8298C88.198 12.5294 88.1011 12.3009 87.9203 12.1311C87.7329 11.9679 87.4939 11.8373 87.2097 11.7329C86.9255 11.6284 86.6154 11.5304 86.2795 11.439C85.6207 11.217 85.1168 10.9102 84.768 10.5184C84.4192 10.1267 84.2448 9.65003 84.2448 9.08852C84.2448 8.65759 84.3546 8.25931 84.5678 7.88715C84.7809 7.51498 85.1039 7.20811 85.5302 6.96653C85.9566 6.72495 86.4733 6.60742 87.0805 6.60742C87.636 6.60742 88.1334 6.67271 88.5727 6.80983C89.0119 6.94694 89.4253 7.18199 89.8129 7.50845L89.0959 8.64454C88.8633 8.39643 88.5856 8.20708 88.2755 8.08302C87.959 7.95897 87.6683 7.89368 87.4164 7.89368C87.1839 7.89368 86.9643 7.93285 86.764 8.00467C86.5638 8.07649 86.4023 8.18096 86.2795 8.31807C86.1568 8.45519 86.0987 8.63148 86.0987 8.83388C86.0858 9.10811 86.1697 9.32357 86.3571 9.4868C86.5444 9.65003 86.7834 9.78715 87.0676 9.89161C87.3518 9.99608 87.6425 10.1005 87.9396 10.205C88.3272 10.3225 88.676 10.4792 88.9861 10.6751C89.2961 10.871 89.5416 11.1126 89.7354 11.3999C89.9227 11.6871 90.0131 12.0463 90.0131 12.4772C90.0131 12.9603 89.8969 13.4043 89.6708 13.8157C89.4447 14.227 89.1023 14.5535 88.6437 14.7951C88.1851 15.0366 87.5973 15.1607 86.8932 15.1607H86.8803Z"
                fill="#0075FF"
              />
              <path
                d="M10.9424 13.496C8.74614 11.276 8.74614 7.68496 10.9424 5.46503L5.61329 0.0849609L0 5.75884L9.30166 15.1609L10.9424 13.5025V13.496Z"
                fill="#0075FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_556_5467">
                <rect width="90" height="19" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </Logo>
      <SearchForm>
        <SearchInput placeholder="Search..." />
        <SearchButton>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 12H12.71L12.43 11.73C13.0549 11.0039 13.5117 10.1487 13.7675 9.22559C14.0234 8.30243 14.072 7.33413 13.91 6.38998C13.44 3.60998 11.12 1.38997 8.31997 1.04997C7.33559 0.925441 6.33576 1.02775 5.397 1.34906C4.45824 1.67038 3.60542 2.20219 2.90381 2.90381C2.20219 3.60542 1.67038 4.45824 1.34906 5.397C1.02775 6.33576 0.925441 7.33559 1.04997 8.31997C1.38997 11.12 3.60998 13.44 6.38998 13.91C7.33413 14.072 8.30243 14.0234 9.22559 13.7675C10.1487 13.5117 11.0039 13.0549 11.73 12.43L12 12.71V13.5L16.25 17.75C16.66 18.16 17.33 18.16 17.74 17.75C18.15 17.34 18.15 16.67 17.74 16.26L13.5 12ZM7.49997 12C5.00997 12 2.99997 9.98997 2.99997 7.49997C2.99997 5.00997 5.00997 2.99997 7.49997 2.99997C9.98997 2.99997 12 5.00997 12 7.49997C12 9.98997 9.98997 12 7.49997 12Z"
              fill="#3733FF"
            />
          </svg>
        </SearchButton>
      </SearchForm>
      <UserContainer>
        {user.user ? (
          <>
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
                  <circle
                    cx="26.5"
                    cy="12.5"
                    r="4"
                    fill="#F3802D"
                    stroke="white"
                  />
                ) : null}
              </svg>
            </UserText>
            <UserText>
              {user.user.profile === "" ? (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="20" fill="#DDDDDD" />
                </svg>
              ) : (
                <UserProfile profile={user.user.profile} />
              )}
            </UserText>
            <UserText>{user.user?.name}</UserText>
            <UserText
              onClick={() => {
                signOut();
                logOut({});
              }}
            >
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
            {/* {user.user.isSocial ? (
              <UserText
                onClick={() => {
                  signOut();
                  logOut({});
                }}
              >
                Sign Out
              </UserText>
            ) : (
              <UserText
                onClick={() => {
                  logOut({});
                }}
              >
                Sign Out
              </UserText>
            )} */}
          </>
        ) : (
          <>
            <UserText>
              <Link href={"/signin"}>Sign In</Link>
            </UserText>
            <UserTextMobile>
              <Link href={"/signin"}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 8C15 9.06087 14.5786 10.0783 13.8284 10.8284C13.0783 11.5786 12.0609 12 11 12C9.93913 12 8.92172 11.5786 8.17157 10.8284C7.42143 10.0783 7 9.06087 7 8C7 6.93913 7.42143 5.92172 8.17157 5.17157C8.92172 4.42143 9.93913 4 11 4C12.0609 4 13.0783 4.42143 13.8284 5.17157C14.5786 5.92172 15 6.93913 15 8ZM13 8C13 8.53043 12.7893 9.03914 12.4142 9.41421C12.0391 9.78929 11.5304 10 11 10C10.4696 10 9.96086 9.78929 9.58579 9.41421C9.21071 9.03914 9 8.53043 9 8C9 7.46957 9.21071 6.96086 9.58579 6.58579C9.96086 6.21071 10.4696 6 11 6C11.5304 6 12.0391 6.21071 12.4142 6.58579C12.7893 6.96086 13 7.46957 13 8Z"
                    fill="#BABCBF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM2 11C2 13.09 2.713 15.014 3.908 16.542C4.74723 15.4399 5.8299 14.5467 7.07143 13.9323C8.31297 13.3179 9.67974 12.9988 11.065 13C12.4323 12.9987 13.7819 13.3095 15.0109 13.9088C16.2399 14.508 17.316 15.3799 18.157 16.458C19.0234 15.3216 19.6068 13.9952 19.8589 12.5886C20.111 11.182 20.0244 9.73553 19.6065 8.36898C19.1886 7.00243 18.4512 5.75505 17.4555 4.73004C16.4598 3.70503 15.2343 2.93186 13.8804 2.47451C12.5265 2.01716 11.0832 1.88877 9.66986 2.09997C8.25652 2.31117 6.91379 2.85589 5.75277 3.68905C4.59175 4.52222 3.64581 5.61987 2.99323 6.8912C2.34065 8.16252 2.00018 9.57097 2 11ZM11 20C8.93395 20.0031 6.93027 19.2923 5.328 17.988C5.97293 17.0647 6.83134 16.3109 7.83019 15.7907C8.82905 15.2705 9.93879 14.9992 11.065 15C12.1772 14.9991 13.2735 15.2636 14.2629 15.7714C15.2524 16.2793 16.1064 17.0159 16.754 17.92C15.1393 19.2667 13.1026 20.0029 11 20Z"
                    fill="#BABCBF"
                  />
                </svg>
              </Link>
            </UserTextMobile>
          </>
        )}
      </UserContainer>
    </NavBarWrapper>
  );
}
