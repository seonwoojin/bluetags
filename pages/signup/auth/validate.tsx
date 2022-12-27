import useMutation from "@libs/client/useMutation";
import { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useUser from "@libs/client/useUser";
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
  font-size: 3rem;
`;

interface AuthForm {
  payload: string;
}

interface AuthResponse {
  error?: string;
  auth?: string;
}

const Validate: NextPage = () => {
  const router = useRouter();
  const [auth, { loading, data, error, status }] = useMutation<AuthResponse>(
    "/api/users/sign-up/auth-check"
  );
  useEffect(() => {
    if (router.query.token && !loading) {
      auth({ tokenId: router.query.token });
    }
  }, [router]);
  useEffect(() => {
    if (status === 200) {
      router.push("/");
    }
  }, [data, status, router]);
  return (
    <Container>
      <InfographicContainer>인포그래픽 이미지</InfographicContainer>
      <LoginContainer>
        {status === 200 ? "이메일 인증 완료!!" : "잘못된 접근!!"}
      </LoginContainer>
    </Container>
  );
};

export default WithHead(
  Validate,
  "Bluetags",
  "Validate",
  "signup/validate",
  "블루태그에서 다양한 NFT 정보를 만나보세요"
);
