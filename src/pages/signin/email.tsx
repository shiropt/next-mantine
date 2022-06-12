import type { NextPage } from "next";
import { Container, Title, Anchor } from "@mantine/core";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { User } from "../../types";
import { AuthForm } from "../../components/user/AuthForm";
import { useStore } from "../../store/user";

const EmailSignin: NextPage = () => {
  const router = useRouter();

  const { setSignin } = useStore();
  const signin = useCallback((values: Pick<User, "email" | "password">) => {
    setSignin(true);
    router.push("/");
  }, []);

  return (
    <Container size="sm" py="100px">
      <Title order={3} className="text-center">
        ログイン
      </Title>
      <AuthForm submit={signin} kind="signin" />
      <Anchor onClick={() => router.push("/signin/password/reset")} className=" p-6 float-right">
        パスワードを忘れた方はこちら &gt;
      </Anchor>
    </Container>
  );
};

export default EmailSignin;
