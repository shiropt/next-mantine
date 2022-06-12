import { Stack, Skeleton, Menu, Text, Button } from "@mantine/core";
import { FC, useCallback, useEffect } from "react";
import { useLoading } from "../../hooks/useLoading";
import { useUser } from "./useUser";
import { Logout, Settings, User } from "tabler-icons-react";
import { useStore } from "../../store/user";
import { useRouter } from "next/router";
export const UserInfo: FC = () => {
  const router = useRouter();
  const { user } = useUser();
  const { isLoading } = useLoading();
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
