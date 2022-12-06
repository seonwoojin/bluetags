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

interface LoginForm {
  email: string;
  password: string;
}

interface LoginResponse {
  error?: string;
}

const WatchList: NextPage = () => {
  const router = useRouter();
  const [login, { loading, data, error, status }] =
    useMutation<LoginResponse>("/api/users/sign-in");
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
    if (status === 200) {
      router.push("/");
    }
  }, [data, status, router]);
  return (
    <Container>
      <InfographicContainer>인포그래픽 이미지</InfographicContainer>
      <LoginContainer>
        <FormContainer>
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
                {...register("email", {
                  required: "Please enter your email.",
                })}
                id="email"
                placeholder="Eamil"
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="password">
                Password<Link href="/">Forgot password?</Link>
              </Label>
              <Input
                {...register("password", {
                  required: "Please enter your password.",
                })}
                type={"password"}
                id="password"
                placeholder="Password"
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
        </FormContainer>
      </LoginContainer>
    </Container>
  );
};

export default WatchList;
