import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import useMutation from "./../../libs/client/useMutation";
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50rem;
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
  div {
    font-size: 1.5rem;
    color: red;
  }
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

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  font-size: 1.2rem;
  white-space: pre;
  input {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border: 3px solid #707070;
    position: relative;
  }
  span {
    color: blue;
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 10rem;
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

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 55%;
  border: none;
  font-size: 2.5rem;
  background-color: coral;
  border-radius: 10px;
  cursor: pointer;
`;

interface EnterForm {
  email: string;
  password: string;
  confirm_password: string;
}

interface EnterResponse {
  error?: { email: string; password: string; confirm_password: string };
}

interface ErrorResponse {
  email: string;
  password: string;
  confirm_password: string;
}

const WatchList: NextPage = () => {
  const router = useRouter();
  const [enter, { loading, data, error, status }] = useMutation<
    EnterResponse,
    ErrorResponse
  >("/api/users/signup");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<EnterForm>();
  const onValid = (validForm: EnterForm) => {
    if (loading) return;
    enter(validForm);
  };
  useEffect(() => {
    if (error) {
      if (error.confirm_password) {
        setError("confirm_password", { message: error.confirm_password });
      }
      if (error.email) {
        setError("email", { message: error.email });
      }
      if (error.password) {
        setError("password", { message: error.password });
      }
    }
    if (status === 200) {
      router.push("/");
    }
  }, [data, error, status]);
  return (
    <Container>
      <InfographicContainer>인포그래픽 이미지</InfographicContainer>
      <LoginContainer>
        <FormContainer>
          <TitleContainer>
            <Link href={"/"}>
              <TitleLogo>LOGO</TitleLogo> BlueTags
            </Link>
          </TitleContainer>
          <Form onSubmit={handleSubmit(onValid)}>
            <InputWrapper>
              <Label htmlFor="email">
                Email Address<div>{errors.email?.message}</div>
              </Label>
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
                Password<div>{errors.password?.message}</div>
              </Label>
              <Input
                {...register("password", {
                  required: "Please enter your password.",
                })}
                type={"password"}
                id="password"
                placeholder="Password"
              />
            </InputWrapper>{" "}
            <InputWrapper>
              <Label htmlFor="confirm_password">
                Confirm Password<div>{errors.confirm_password?.message}</div>
              </Label>
              <Input
                {...register("confirm_password", {
                  required: "Please enter your confirm password.",
                })}
                type={"password"}
                id="password"
                placeholder="Confrim Password"
              />
            </InputWrapper>
            <CheckBoxWrapper>
              <input type={"checkbox"} />
              <div>
                <p>
                  {`Creating an account means you're okay with our `}
                  <span>Terms of Service, Privacy Policy,</span>
                </p>
                <p>
                  {`and our default `}
                  <span>Notification Settings.</span>
                </p>
              </div>
            </CheckBoxWrapper>
            <ButtonWrapper>
              <Button>Sign up</Button>
            </ButtonWrapper>
          </Form>
        </FormContainer>
      </LoginContainer>
    </Container>
  );
};

export default WatchList;
