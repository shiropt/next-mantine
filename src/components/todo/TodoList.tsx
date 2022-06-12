import { Tabs } from "@mantine/core";
import { FC } from "react";
import { TodoTable } from "./TodoTable";
import { useTodo } from "./useTodo";

export const TodoList: FC = () => {
  const { todoList, doneTodoList, stillTodoList } = useTodo();

  return (
    <Tabs>
      <Tabs.Tab label="全て">{todoList && <TodoTable todoList={todoList} />}</Tabs.Tab>
      <Tabs.Tab label="未完了">{stillTodoList && <TodoTable todoList={stillTodoList} />}</Tabs.Tab>
      <Tabs.Tab label="完了済み">{doneTodoList && <TodoTable todoList={doneTodoList} />}</Tabs.Tab>
    </Tabs>
  );
};
