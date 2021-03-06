/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { TodoForm } from "../components/todo/TodoForm";
import { TodoList } from "../components/todo/TodoList/TodoList";
import { useStore } from "../store/user";

const Home: NextPage = () => {
  const router = useRouter();
  const { isSignin } = useStore();

  useEffect(() => {
    if (!isSignin) {
      router.replace("/signin");
    }
  }, []);
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Home;
