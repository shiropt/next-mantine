import { useCallback, useEffect, useState } from "react";
import { mutate } from "swr";
import { deleteData, postData, putData, useFetch } from "../../hooks/useAsyncData";
import { useStore as useUserStore } from "../../store/user";
import { Todo } from "../../types";
import { path } from "../../utils/path";

export const useTodo = () => {
  const { isSignin } = useUserStore();
  const { data: todoList, isLoading, error } = useFetch<Todo[]>(path.todo, isSignin);
  const doneTodoList = todoList?.filter((todo) => todo.isDone);
  const stillTodoList = todoList?.filter((todo) => !todo.isDone);

  const [state, setState] = useState<Omit<Todo, "id">>({
    title: "",
    fixedDate: new Date(),
    isDone: false,
    importance: "中",
  });

  const addTodo = useCallback(async () => {
    if (!state.title) return;
    await postData<Todo[]>(path.todo, state);
    setState({ ...state, title: "", fixedDate: new Date(), importance: "中" });
    mutate(path.todo);
  }, [state]);

  const updateValue = useCallback(
    (value: object) => {
      setState({ ...state, ...value });
    },
    [state]
  );

  const checkTodo = useCallback(
    async (id: string) => {
      if (!todoList) return;
      const index = todoList.findIndex((todo) => todo.id === id);
      await putData<Todo[]>(path.todo, { ...todoList[index], isDone: !todoList[index].isDone });
      mutate(path.todo);
    },
    [todoList]
  );

  const deleteTodo = useCallback(
    async (id: string) => {
      await deleteData<Todo[]>(path.todo, id);
      mutate(path.todo);
    },
    [todoList]
  );
  const importanceStyle = (importance: Todo["importance"]) => {
    switch (importance) {
      case "低":
        return "bg-blue-400";
      case "中":
        return "bg-green-300";
      case "高":
        return "bg-red-500 text-white font-bold";
    }
  };
  const createDate = (day: Date): string => {
    const date = new Date(day);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  return {
    todoList,
    doneTodoList,
    stillTodoList,
    isLoading,
    error,
    checkTodo,
    deleteTodo,
    importanceStyle,
    createDate,
    addTodo,
    updateValue,
    state,
  };
};
