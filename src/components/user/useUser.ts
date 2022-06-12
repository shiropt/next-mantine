import { useEffect } from "react";
import { useFetch } from "../../hooks/useAsyncData";
import { User } from "../../pages/api/hello";
import { useStore as useLoadingStore } from "../../store/loading";
import { useStore } from "../../store/user";
import { path } from "../../utils/path";

export const useUser = () => {
  const { isSignin } = useStore();
  const { setLoading } = useLoadingStore();
  const { data: user, error, isLoading } = useFetch<User>(path.hello, isSignin);

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [user]);
  return { user, error, isLoading };
};
