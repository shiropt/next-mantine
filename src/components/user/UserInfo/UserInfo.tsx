/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, Skeleton, Menu, Text } from "@mantine/core";
import { FC, useCallback } from "react";
import { Logout, User } from "tabler-icons-react";
import { useRouter } from "next/router";
import { useUser } from "../useUser";
import { useStore } from "../../../store/user";
export const UserInfo: FC = () => {
  const router = useRouter();
  const { data: user } = useUser();
  const { isLoading } = useUser();
  const { setSignin } = useStore();
  const signOut = useCallback(() => {
    setSignin(false);
    router.push("/signin");
  }, []);
  if (isLoading) return <Skeleton height={28} />;

  return (
    <Stack align="flex-end" className=" mr-4">
      <Menu>
        <Menu.Item icon={<User size={16} />}>{user?.name}</Menu.Item>
        <Menu.Item icon={<Logout size={16} />} onClick={signOut}>
          <Text>ログアウト</Text>
        </Menu.Item>
      </Menu>
    </Stack>
  );
};
