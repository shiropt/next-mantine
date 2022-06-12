import { Header } from "@mantine/core";
import { FC } from "react";
import { UserInfo } from "../user/UserInfo";

export const HeaderComponent: FC = () => {
  return (
    <Header height={80} p="xs">
      <UserInfo />
    </Header>
  );
};
