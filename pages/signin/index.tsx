import useMutation from "@libs/client/useMutation";
import { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";
import WithHead from "@components/WithHead";
import Logo from "@components/Logo";
import { breakingPoint } from "constants/breakingPoint";
import { useSWRConfig } from "swr";
import useUser from "@libs/client/useUser";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-width: 1500px;
  height: 100vh;
  @media ${breakingPoint.device.mobile} {
    flex-direction: column;
    justify-content: flex-start;
    min-width: 0px;
    padding-top: 0px;
    padding-left: 0px;
    overflow-x: hidden;
  }
`;

const InfographicContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  font-size: 8rem;
  color: black;
  background: url("/images/SignImage.png");
  background-position: center center;
  background-size: cover;
  svg {
    width: 213px;
    height: 44px;
  }
  @media ${breakingPoint.device.mobile} {
    width: 70vw;
    height: 35vh;
    min-height: 280px;
    margin: 30px 0px;
    border-radius: 20px;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: calc(100vh - 60vw);
  @media ${breakingPoint.device.mobile} {
    width: 100vw;
    height: auto;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: auto;
  height: 100%;
  .web {
    @media ${breakingPoint.device.mobile} {
      display: none;
    }
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 344px;
  height: 42px;
  margin-bottom: 3rem;
  font-size: 26px;
  color: #1c1b1b;
  @media ${breakingPoint.device.mobile} {
    display: none;
  }
`;

const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 620px;
  height: auto;
  margin-bottom: 3rem;
  @media ${breakingPoint.device.mobile} {
    width: 85vw;
  }
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #4f4f4f;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  svg {
    margin-left: 1rem;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 946px;
  height: auto;
  margin-bottom: 50px;
  padding: 40px 0px;
  background-color: rgba(0, 117, 255, 0.03);
  border: 1px solid rgba(0, 117, 255, 0.1);
  @media ${breakingPoint.device.mobile} {
    width: 85vw;
    background-color: inherit;
    border: none;
    margin-bottom: 20px;
    padding: 0px 0px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 620px;
  height: 10rem;
  @media ${breakingPoint.device.mobile} {
    width: 100%;
    height: 8rem;
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 18px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #4f4f4f;
  div {
    margin-left: 10px;
    font-size: 1.5rem;
    color: red;
  }
  @media ${breakingPoint.device.mobile} {
    font-size: 12px;
    font-weight: 600;
  }
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 1.5rem;
  border: 1px solid #4f4f4f;
  border-radius: 4px;
  font-size: 16px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 620px;
  height: 40px;
  margin-bottom: 10px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 40%;
    font-size: 1.5rem;
    a {
      margin-left: 10px;
      color: blueviolet;
    }
  }
  @media ${breakingPoint.device.mobile} {
    width: 85vw;
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  width: 620px;
  height: auto;
  font-size: 1.5rem;
  color: red;
`;

const Button = styled.button<{ login: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: ${(props) => (props.login ? "none" : "1px solid #3733ff")};
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => (props.login ? "#ffffff" : "#3733FF")};
  background-color: ${(props) => (props.login ? "#0075ff" : "#ffffff")};
  border-radius: 4px;
  cursor: pointer;
`;

const SignUp = styled.div<{ login: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 620px;
  height: 40px;
  border: ${(props) => (props.login ? "none" : "1px solid #3733ff")};
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => (props.login ? "#ffffff" : "#3733FF")};
  background-color: ${(props) => (props.login ? "#0075ff" : "#ffffff")};
  border-radius: 4px;
  cursor: pointer;
  @media ${breakingPoint.device.mobile} {
    width: 85vw;
  }
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 620px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 12px;
  text-decoration: underline;
  a {
    color: black;
  }
  .mobile {
    display: none;
  }
  @media ${breakingPoint.device.mobile} {
    justify-content: flex-end;
    width: 85vw;
    .mobile {
      display: block;
      color: #3733ff;
      font-size: 16px;
      text-decoration: none;
    }
  }
`;

interface LoginForm {
  email: string;
  password: string;
}

interface LoginResponse {
  error?: string;
  auth?: string;
}

const SignIn: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [login, { loading, data, error, status }] =
    useMutation<LoginResponse>("/api/users/sign-in");
  const [
    socialLogin,
    {
      loading: socialLoading,
      data: socialData,
      error: socialError,
      status: socialStatus,
    },
  ] = useMutation("/api/users/sign-in/social/google");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginForm>();
  const onValid = (validForm: LoginForm) => {
    if (loading) return;
    login(validForm);
  };
  useEffect(() => {
    if (session?.user && !socialLoading) {
      socialLogin(session.user);
    }
  }, [session]);
  useEffect(() => {
    axios.get("/api/users/check").then((response) => {
      if (response.data) {
        router.push("/");
      }
    });
  }, []);
  useEffect(() => {
    if (socialStatus === 200) {
      router.push("/");
    }
  }, [socialStatus]);
  useEffect(() => {
    if (data) {
      if (!data?.auth) {
        router.push("/signup/auth");
      } else if (status === 200) {
        router.reload();
      }
    }
  }, [data, status, router]);
  return (
    <Container>
      <InfographicContainer>
        <Link href={"/"}>
          <Logo color="#ffffff" />
        </Link>
      </InfographicContainer>
      <LoginContainer>
        <FormContainer>
          <TitleContainer>Sign in</TitleContainer>
          <LoginForm onSubmit={handleSubmit(onValid)}>
            <InputContainer>
              <InputWrapper>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  {...register("email", {
                    required: "Please enter your email.",
                  })}
                  id="email"
                  placeholder="Email"
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password", {
                    required: "Please enter your password.",
                  })}
                  type={"password"}
                  id="password"
                  placeholder="Password"
                />
              </InputWrapper>
              <ErrorMessage>{error}</ErrorMessage>
            </InputContainer>
            <SocialLoginContainer>
              <SocialLogin onClick={() => signIn("google")}>
                {session?.user ? (
                  "Logged in"
                ) : (
                  <>
                    Sign in with google
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_684_5624)">
                        <path
                          d="M13.9935 7.29848C13.9935 6.71146 13.9459 6.28309 13.8428 5.83887H7.13965V8.48837H11.0742C10.995 9.1468 10.5666 10.1384 9.61464 10.8047L9.6013 10.8934L11.7207 12.5353L11.8675 12.55C13.2161 11.3045 13.9935 9.47203 13.9935 7.29848Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M7.13965 14.2792C9.06727 14.2792 10.6855 13.6445 11.8675 12.5499L9.61464 10.8046C9.01177 11.225 8.20261 11.5186 7.13965 11.5186C5.25167 11.5186 3.64927 10.2732 3.07806 8.55176L2.99434 8.55887L0.790539 10.2644L0.761719 10.3445C1.93575 12.6767 4.3473 14.2792 7.13965 14.2792Z"
                          fill="#34A853"
                        />
                        <path
                          d="M3.07787 8.55102C2.92715 8.1068 2.83992 7.6308 2.83992 7.13899C2.83992 6.64713 2.92715 6.17119 3.06994 5.72696L3.06595 5.63235L0.834531 3.89941L0.761523 3.93414C0.277648 4.90195 0 5.98875 0 7.13899C0 8.28924 0.277648 9.37598 0.761523 10.3438L3.07787 8.55102Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M7.13965 2.76057C8.48026 2.76057 9.38457 3.33966 9.90022 3.82359L11.9151 1.85626C10.6777 0.706016 9.06727 0 7.13965 0C4.3473 0 1.93575 1.6024 0.761719 3.9346L3.07013 5.72742C3.64927 4.00602 5.25167 2.76057 7.13965 2.76057Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_684_5624">
                          <rect width="14" height="14.3281" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </>
                )}
              </SocialLogin>
            </SocialLoginContainer>
            <ButtonWrapper>
              <Button login={true}>Login</Button>
            </ButtonWrapper>
            <LinkBox>
              <Link href={"/signup"}>Forgot your password ?</Link>
            </LinkBox>
            <SignUp onClick={() => router.push("/signup")} login={false}>
              Sign up
            </SignUp>
          </LoginForm>
        </FormContainer>
      </LoginContainer>
    </Container>
  );
};

export default WithHead(
  SignIn,
  "Bluetags",
  "SignIn",
  "signin",
  "블루태그에서 다양한 NFT 정보를 만나보세요"
);
