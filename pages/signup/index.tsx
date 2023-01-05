import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import useMutation from "./../../libs/client/useMutation";
import { useRouter } from "next/router";
import { User } from "@prisma/client";
import axios from "axios";
import WithHead from "@components/WithHead";
import Logo from "@components/Logo";
import { breakingPoint } from "constants/breakingPoint";

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
    display: none;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  .mobile {
    display: none;
  }
  @media ${breakingPoint.device.mobile} {
    flex-direction: column;
    width: 100vw;
    height: auto;
    .mobile {
      display: flex;
      width: 100vw;
      margin-top: 5vh;
      margin-bottom: 3vh;
      margin-left: 8vw;
    }
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: auto;
  height: 100%;
  @media ${breakingPoint.device.mobile} {
    width: 85vw;
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
    width: 85vw;
  }
`;

const Form = styled.form`
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

const CheckBoxTitle = styled.div`
  display: none;
  width: 85vw;
  height: auto;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #4f4f4f;
  @media ${breakingPoint.device.mobile} {
    display: flex;
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  margin-bottom: 50px;
  padding-left: 100px;
  @media ${breakingPoint.device.mobile} {
    padding-left: 0px;
  }
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 5rem;
  font-size: 13px;
  white-space: pre;
  input {
    appearance: none;
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    border: 1px solid #191f28;
    cursor: pointer;
    &:checked {
      background-position: center center;
      border: none;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 18 18' fill='blue' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.6 13.2L14.65 6.15L13.25 4.75L7.6 10.4L4.75 7.55L3.35 8.95L7.6 13.2ZM2 18C1.45 18 0.979 17.8043 0.587 17.413C0.195667 17.021 0 16.55 0 16V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H16C16.55 0 17.021 0.195667 17.413 0.587C17.8043 0.979 18 1.45 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.021 17.8043 16.55 18 16 18H2ZM2 16H16V2H2V16ZM2 2V16V2Z'/%3e%3c/svg%3e");
    }
    span {
      color: blue;
      cursor: pointer;
    }
  }
  @media ${breakingPoint.device.mobile} {
    display: none;
  }
`;

const CheckBoxMobile = styled.div<{ select: string }>`
  display: none;
  @media ${breakingPoint.device.mobile} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85vw;
    height: 50px;
    margin-bottom: 10px;
    padding: 0px 10vw;
    background-color: ${(props) =>
      props.select === "true" ? "#4f4f4f" : "inherit"};
    color: ${(props) => (props.select === "true" ? "#ffffff" : "#4f4f4f")};
    font-size: 12px;
    font-weight: 600;
    border-radius: 4px;
    border: 1px solid #4f4f4f;
  }
`;

const CheckBoxError = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 600;
  font-size: 1.5rem;
  color: red;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 620px;
  height: 40px;
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

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 16px;
  color: #ffffff;
  background-color: #0075ff;
  border-radius: 4px;
  cursor: pointer;
`;

interface EnterForm {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
}

interface EnterResponse {
  user: User;
  error?: {
    email: string;
    password: string;
    confirm_password: string;
    name: string;
  };
}

interface ErrorResponse {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
}

interface UserResponse {
  data: User;
}

const SignUp: NextPage = () => {
  const router = useRouter();
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBoxMobile, setCheckBoxMobile] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [checkBoxError, setCheckBoxError] = useState("");
  const [enter, { loading, data, error, status }] = useMutation<
    EnterResponse,
    ErrorResponse
  >("/api/users/sign-up");
  const [auth, {}] = useMutation("/api/users/sign-up/auth");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<EnterForm>();
  const onClickTerm = (termIndex: number) => {
    const array: boolean[] = [];
    checkBoxMobile.map((bool, index) => {
      if (index !== termIndex) {
        array.push(bool);
      } else {
        array.push(!bool);
      }
    });
    setCheckBoxMobile((prev) => [...array]);
  };
  const onValid = (validForm: EnterForm) => {
    if (!checkBox1 || !checkBox2) {
      setCheckBoxError("Please check");
      return;
    }
    if (loading) return;
    enter(validForm);
  };
  useEffect(() => {
    axios.get("/api/users/check").then((response) => {
      if (response.data) {
        router.push("/");
      }
    });
  }, []);
  useEffect(() => {
    if (checkBox1 && checkBox2) {
      setCheckBoxError("");
    }
  }, [checkBox1, checkBox2]);
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
      if (error.name) {
        setError("name", { message: error.name });
      }
    }
    if (status === 200) {
      auth({ email: data?.user.email });
      router.push("/signup/auth");
    }
  }, [data, error, status, router, setError]);
  return (
    <Container>
      <InfographicContainer>
        <Link href={"/"}>
          <Logo color="#ffffff" />
        </Link>
      </InfographicContainer>
      <LoginContainer>
        <div className="mobile">
          <Logo width="244" height="40" />
        </div>
        <FormContainer>
          <TitleContainer>Sign up</TitleContainer>
          <Form onSubmit={handleSubmit(onValid)}>
            <InputContainer>
              <InputWrapper>
                <Label htmlFor="email">
                  E-mail<div>{errors.email?.message}</div>
                </Label>
                <Input
                  {...register("email", {
                    required: "Please enter your email.",
                  })}
                  id="email"
                  placeholder="E-mail"
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="name">
                  Name<div>{errors.name?.message}</div>
                </Label>
                <Input
                  {...register("name", {
                    required: "Please enter your name.",
                  })}
                  id="name"
                  placeholder="Name"
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
              </InputWrapper>
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
            </InputContainer>
            <CheckBoxContainer>
              <CheckBoxWrapper>
                <input
                  onClick={() => {
                    setCheckBox1((prev) => !prev);
                  }}
                  type={"checkbox"}
                />
                <div>
                  <p>
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply.
                  </p>
                </div>
              </CheckBoxWrapper>
              <CheckBoxWrapper>
                <input
                  onClick={() => {
                    setCheckBox2((prev) => !prev);
                  }}
                  type={"checkbox"}
                />
                <div>
                  <p>
                    Creating an account means you are okay with our Terms of
                    Service, Privacy Policy, and our default Notification
                    Settings.
                  </p>
                </div>
              </CheckBoxWrapper>
              <CheckBoxTitle>
                Terms of collection of non-member information
              </CheckBoxTitle>
              <CheckBoxMobile
                onClick={() => onClickTerm(0)}
                select={String(checkBoxMobile[0])}
              >
                <span>Option A agreement</span>
                <span>
                  {checkBoxMobile[0] ? (
                    <svg
                      width="24"
                      height="14"
                      viewBox="0 0 24 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8351 1.41L16.4333 0L10.1299 6.34L11.5318 7.75L17.8351 1.41ZM22.0506 0L11.5318 10.58L7.37594 6.41L5.97409 7.82L11.5318 13.41L23.4624 1.41L22.0506 0ZM0.346802 7.82L5.9045 13.41L7.30635 12L1.7586 6.41L0.346802 7.82Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <span
                      onClick={() => router.push(`/signup?agreement=0`)}
                    >{`(see details)`}</span>
                  )}
                </span>
              </CheckBoxMobile>
              <CheckBoxMobile
                onClick={() => onClickTerm(1)}
                select={String(checkBoxMobile[1])}
              >
                <span>Option A agreement</span>
                <span>
                  {" "}
                  {checkBoxMobile[1] ? (
                    <svg
                      width="24"
                      height="14"
                      viewBox="0 0 24 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8351 1.41L16.4333 0L10.1299 6.34L11.5318 7.75L17.8351 1.41ZM22.0506 0L11.5318 10.58L7.37594 6.41L5.97409 7.82L11.5318 13.41L23.4624 1.41L22.0506 0ZM0.346802 7.82L5.9045 13.41L7.30635 12L1.7586 6.41L0.346802 7.82Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                      <span style={{ width:"100px", }}
                      onClick={() => router.push(`/signup?agreement=1`)}
                    >{`(see details)`}</span>
                  )}
                </span>
              </CheckBoxMobile>
              <CheckBoxMobile
                onClick={() => onClickTerm(2)}
                select={String(checkBoxMobile[2])}
              >
                <span>Option A agreement</span>
                <span>
                  {checkBoxMobile[2] ? (
                    <svg
                      width="24"
                      height="14"
                      viewBox="0 0 24 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8351 1.41L16.4333 0L10.1299 6.34L11.5318 7.75L17.8351 1.41ZM22.0506 0L11.5318 10.58L7.37594 6.41L5.97409 7.82L11.5318 13.41L23.4624 1.41L22.0506 0ZM0.346802 7.82L5.9045 13.41L7.30635 12L1.7586 6.41L0.346802 7.82Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    `(see details)`
                  )}
                </span>
              </CheckBoxMobile>
              <CheckBoxMobile
                onClick={() => onClickTerm(3)}
                select={String(checkBoxMobile[3])}
              >
                <span>Option A agreement</span>
                <span>
                  {checkBoxMobile[3] ? (
                    <svg
                      width="24"
                      height="14"
                      viewBox="0 0 24 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8351 1.41L16.4333 0L10.1299 6.34L11.5318 7.75L17.8351 1.41ZM22.0506 0L11.5318 10.58L7.37594 6.41L5.97409 7.82L11.5318 13.41L23.4624 1.41L22.0506 0ZM0.346802 7.82L5.9045 13.41L7.30635 12L1.7586 6.41L0.346802 7.82Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    `(see details)`
                  )}
                </span>
              </CheckBoxMobile>
              <CheckBoxError>{checkBoxError}</CheckBoxError>
            </CheckBoxContainer>
            <ButtonWrapper>
              <Button>Create Account</Button>
            </ButtonWrapper>
          </Form>
        </FormContainer>
      </LoginContainer>
    </Container>
  );
};

export default WithHead(
  SignUp,
  "Bluetags",
  "SignUp",
  "signup",
  "블루태그에서 다양한 NFT 정보를 만나보세요"
);
