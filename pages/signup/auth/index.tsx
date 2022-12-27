import useMutation from "@libs/client/useMutation";
import { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";
import WithHead from "@components/WithHead";

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
  font-size: 2rem;
`;

interface AuthForm {
  payload: string;
}

interface AuthResponse {
  error?: string;
  auth?: string;
}

const Auth: NextPage = () => {
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
  return (
    <Container>
      <InfographicContainer>인포그래픽 이미지</InfographicContainer>
      <LoginContainer>
        이메일 인증 필요!! 가입한 이메일로 메일 확인 !!
      </LoginContainer>
    </Container>
  );
};

export default WithHead(
  Auth,
  "Bluetags",
  "Auth",
  "signup/auth",
  "블루태그에서 다양한 NFT 정보를 만나보세요"
);
