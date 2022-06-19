import { Skeleton, Table } from "@mantine/core";
import { FC } from "react";
import { Square, Checkbox, Trash, AlertTriangle } from "tabler-icons-react";
import { Todo } from "../../types";
import { useTodo } from "./useTodo";

type Props = {
  todoList?: Todo[];
};

export const TodoTable: FC<Props> = ({ todoList }) => {
  const { isLoading } = useTodo();
  const { checkTodo, deleteTodo, importanceStyle, createDate } = useTodo();

  return (
    <Table horizontalSpacing="xl" fontSize="lg">
      <thead>
        <tr>
          <th>完了</th>
          <th>Todo</th>
          <th>期日</th>
          <th>重要度</th>
          <th>削除</th>
        </tr>
      </thead>
      {isLoading ? (
        <tbody>
          {[...Array(20)].map((_, i) => (
            <tr key={i}>
              <td colSpan={5}>
                <Skeleton height={28} />
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody>
          {todoList &&
            todoList.map((todo, i) => (
              <tr key={i} className={todo.isDone ? "bg-slate-100" : ""}>
                <td className=" w-24 cursor-pointer" onClick={() => checkTodo(todo.id)}>
                  {todo.isDone ? (
                    <Checkbox size={32} strokeWidth={1.5} color={"#79d287"} />
                  ) : (
                    <Square size={32} strokeWidth={0.5} color={"#79d287"} />
                  )}
                </td>
                <td className="w-96">{todo.title}</td>
                <td>
                  <p>{createDate(todo.fixedDate)}</p>
                </td>
                <td>
                  <p className={importanceStyle(todo.importance) + " rounded-full w-1/4 h-8 text-center  pt-1"}>
                    {todo.importance}
                  </p>
                </td>
                <td className="cursor-pointer" onClick={() => deleteTodo(todo.id)}>
                  <Trash size={32} strokeWidth={0.5} color={"#f4020e"} />
                </td>
              </tr>
            ))}
        </tbody>
      )}
    </Table>
  );
};
