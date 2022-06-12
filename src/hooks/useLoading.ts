import { useTodo } from "../components/todo/useTodo";
import { useUser } from "../components/user/useUser";

export const useLoading = () => {
  const { isLoading: isTodoLoading } = useTodo();
  const { isLoading: isUserLoading } = useUser();

  return { isLoading: isTodoLoading || isUserLoading };
};
