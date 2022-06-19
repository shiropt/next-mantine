import { Header } from "@mantine/core";
import { FC } from "react";
import { useStore } from "../../../store/user";
import { UserInfo } from "../../user/UserInfo/UserInfo";

export const HeaderComponent: FC = () => {
  const { isSignin } = useStore();
  return (
    <Header data-testid="email" height={80} p="xs">
      {isSignin && <UserInfo />}
    </Header>
  );
};
