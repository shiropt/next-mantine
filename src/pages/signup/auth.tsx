/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { Container, Title } from "@mantine/core";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { User } from "../../types";
import { AuthForm } from "../../components/user/AuthForm";

const SmsAuth: NextPage = () => {
  const router = useRouter();
  const signin = useCallback((values: Pick<User, "password">) => {
    // setUserInfo({ id: 1, name: "shiro", isSignIn: true });
    router.push("/");
  }, []);

  return (
    <Container size="sm" py="100px">
      <Title order={3} className="text-center">
        電話番号の認証
      </Title>
      <AuthForm kind="auth" submit={signin} />
    </Container>
  );
};

export default SmsAuth;
