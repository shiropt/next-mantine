import { Header } from "@mantine/core";
import { FC } from "react";
import { useStore } from "../../store/user";
import { UserInfo } from "../user/UserInfo";

export const HeaderComponent: FC = () => {
  const { isSignin } = useStore();
  return (
    <Header height={80} p="xs">
      {isSignin && <UserInfo />}
    </Header>
  );
};
