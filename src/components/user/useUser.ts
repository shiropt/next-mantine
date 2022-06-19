import { useFetch } from "../../hooks/useAsyncData";
import { User } from "../../pages/api/hello";
import { useStore } from "../../store/user";
import { path } from "../../utils/path";

export const useUser = () => {
  const { isSignin } = useStore();
  const { data, error, isLoading } = useFetch<User>(path.user, isSignin);

  return { data, error, isLoading };
};
