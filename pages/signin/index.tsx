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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-width: 1500px;
  height: 100vh;
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
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: auto;
  height: 100%;
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
`;

const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 10rem;
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
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 620px;
  height: 10rem;
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
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.login ? "#ffffff" : "#3733FF")};
  background-color: ${(props) => (props.login ? "#0075ff" : "#ffffff")};
  border-radius: 4px;
  cursor: pointer;
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
        router.push("/");
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
          <TitleContainer>Sign up</TitleContainer>
          <LoginForm onSubmit={handleSubmit(onValid)}>
            <InputContainer>
              <InputWrapper>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  {...register("email", {
                    required: "Please enter your email.",
                  })}
                  id="email"
                  placeholder="Eamil"
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
            {/* <SocialLoginContainer>
              <SocialLogin onClick={() => signIn("google")}>
                {session?.user ? (
                  "Logged in"
                ) : (
                  <>
                    <svg
                      style={{ width: "3rem" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                    </svg>
                    Sign in with google
                  </>
                )}
              </SocialLogin>
              <SocialLogin onClick={() => signOut()}>
                <svg
                  style={{ width: "2rem" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
                Sign in with facebook
              </SocialLogin>
            </SocialLoginContainer> */}
            <ButtonWrapper>
              <Button login={true}>Login</Button>
            </ButtonWrapper>
            <LinkBox>
              Forgot Account /<Link href={"/signup"}>Password</Link>
            </LinkBox>
            <ButtonWrapper>
              <Button login={false}>Sign up</Button>
            </ButtonWrapper>
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
