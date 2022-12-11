import useMutation from "@libs/client/useMutation";
import { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-width: 1500px;
  height: 100vh;
`;

const InfographicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  font-size: 8rem;
  color: black;
  background-color: rgba(0, 0, 0, 0.2);
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 10rem;
  margin-bottom: 3rem;
  font-size: 5rem;
  a {
    display: flex;
    align-items: center;
    color: black;
  }
`;

const TitleLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  margin-right: 1rem;
  font-size: 3rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 15rem;
  margin-bottom: 3rem;
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 45%;
  border-radius: 2.5rem;
  border: 1px solid black;
  font-size: 2rem;
  cursor: pointer;
  svg {
    margin-right: 2rem;
  }
`;

const HorizontalBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 10rem;
  margin-bottom: 3rem;
  font-size: 3rem;
`;

const Hr = styled.hr`
  width: 40%;
  border: 1px solid black;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 30rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 10rem;
  a {
    color: blueviolet;
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 2rem;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50%;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.2);
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 45%;
  height: 10rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40%;
    font-size: 1.5rem;
    a {
      margin-left: 10px;
      color: blueviolet;
    }
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
  height: 10rem;
  font-size: 1.5rem;
  color: red;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.5rem;
  border: none;
  font-size: 2.5rem;
  background-color: coral;
  border-radius: 10px;
  cursor: pointer;
`;

interface AuthForm {
  payload: string;
}

interface AuthResponse {
  error?: string;
  auth?: string;
}

const WatchList: NextPage = () => {
  const router = useRouter();
  const [auth, { loading, data, error, status }] =
    useMutation<AuthResponse>("/api/users/auth");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<AuthForm>();
  const onValid = (validForm: AuthForm) => {
    if (loading) return;
  };
  useEffect(() => {
    console.log(data?.auth);
    // if (status === 200) {
    //   router.push("/");
    // }
  }, [data, status, router]);
  return (
    <Container>
      <InfographicContainer>인포그래픽 이미지</InfographicContainer>
      <LoginContainer>
        {/* <FormContainer>
          <TitleContainer>
            <Link href="/">
              <TitleLogo>LOGO</TitleLogo> BlueTags
            </Link>
          </TitleContainer>
          <SocialLoginContainer>
            <SocialLogin>
              <svg
                style={{ width: "3rem" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
              Sign in with google
            </SocialLogin>
            <SocialLogin>
              <svg
                style={{ width: "2rem" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
              Sign in with facebook
            </SocialLogin>
          </SocialLoginContainer>
          <HorizontalBarContainer>
            <Hr /> Or <Hr />
          </HorizontalBarContainer>
          <LoginForm onSubmit={handleSubmit(onValid)}>
            <InputWrapper>
              <Label htmlFor="email">Email Address</Label>
              <Input
                {...register("payload", {
                  required: "Please enter your email.",
                })}
                id="email"
                placeholder="Eamil"
              />
            </InputWrapper>
            <MessageContainer>
              <ErrorMessage>{error}</ErrorMessage>
              <ButtonWrapper>
                <Button>Sign in</Button>
                <div>
                  Not a member? <Link href={"/signup"}>Sign up now</Link>
                </div>
              </ButtonWrapper>
            </MessageContainer>
          </LoginForm>
        </FormContainer> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <svg
            width="90"
            height="19"
            viewBox="0 0 90 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_556_5467)">
              <path
                d="M24.1391 0.999023C25.5472 0.999023 26.6518 1.29284 27.4592 1.86741C28.2667 2.44851 28.6736 3.34954 28.6736 4.55744C28.6736 5.31483 28.5057 5.96775 28.1698 6.5162C27.8339 7.06466 27.3623 7.49559 26.7681 7.80899C26.1673 8.12239 25.4633 8.30521 24.6429 8.35744L24.3716 7.35847C25.3147 7.38459 26.1609 7.55435 26.9102 7.86775C27.6595 8.18115 28.2538 8.61861 28.693 9.18012C29.1322 9.74163 29.3519 10.4076 29.3519 11.1781C29.3519 11.8832 29.2291 12.4839 28.9772 12.9867C28.7253 13.4894 28.3765 13.9007 27.9308 14.2207C27.4851 14.5406 26.9877 14.7757 26.4386 14.9258C25.8896 15.076 25.3082 15.1543 24.701 15.1543H20.5347V0.999023H24.1391V0.999023ZM23.9388 7.18871C24.714 7.18871 25.2759 6.97325 25.6247 6.54232C25.9736 6.11139 26.148 5.58906 26.148 4.97531C26.148 4.21792 25.9219 3.66947 25.4697 3.32995C25.0175 2.99043 24.4104 2.82067 23.6481 2.82067H21.8266V7.18871H23.9388V7.18871ZM24.0163 13.398C24.546 13.398 25.024 13.3196 25.4503 13.1629C25.8767 13.0062 26.219 12.7647 26.4709 12.4317C26.7229 12.0987 26.8456 11.6939 26.8456 11.2042C26.8456 10.6557 26.7035 10.2248 26.4128 9.91139C26.1221 9.59799 25.7475 9.36947 25.2953 9.23236C24.8431 9.09524 24.3781 9.02342 23.9001 9.02342H21.8266V13.3915H24.0163V13.398Z"
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "500px",
              height: "250px",
              marginTop: "30px",
              padding: "30px 20px",
              border: "1px solid rgba(0,0,0,0.2)",
            }}
          >
            <h1 style={{ fontSize: "25px", color: "rgba(0,0,0,0.7)" }}>
              Confirm your email address.
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100px",
              }}
            >
              <a
                href="ht"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "250px",
                  height: "50px",
                  border: "none",
                  backgroundColor: "rgb(55, 51, 255)",
                  color: "white",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Confirm email address
              </a>
            </div>
          </div>
        </div>
      </LoginContainer>
    </Container>
  );
};

export default WatchList;
