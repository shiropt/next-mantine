import { path } from "./../../utils/path";
import { rest } from "msw";
import { Todo } from "../../types";

export const todoHandler = [
  rest.get(path.todo, (req, res, ctx) => {
    const sortedTodoList = Array.from(todoList).reverse();
    return res(ctx.delay(0), ctx.status(200), ctx.json(sortedTodoList));
  }),
  rest.post<Todo>(path.todo, (req, res, ctx) => {
    const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1;
    const newTodo: Todo = {
      ...req.body,
      id,
    };
    todoList.push(newTodo);
    return res(ctx.status(200), ctx.json(todoList));
  }),

  rest.put<Todo>(path.todo, (req, res, ctx) => {
    const target = todoList.findIndex((todo) => todo.id === req.body.id);
    todoList[target] = req.body;
    return res(ctx.status(200), ctx.json(todoList));
  }),

  rest.delete<number>(path.todo, (req, res, ctx) => {
    const target = todoList.findIndex((todo) => todo.id === req.body);
    console.log({ target: req.body });

    todoList.splice(target, 1);
    return res(ctx.status(200), ctx.json(todoList));
  }),
];
const todoSamples = [
  "掃除",
  "洗濯",
  "朝食",
  "昼食",
  "夕食",
  "散歩",
  "筋トレ",
  "支払い",
  "帰省",
  "勉強",
  "ランニング",
  "読書",
];

const importanceList: Todo["importance"][] = ["低", "中", "高"];
const todoList: Todo[] = [...Array(17)].map((_, i) => {
  return {
    id: i + 1,
    title: todoSamples[Math.floor(Math.random() * 12)],
    fixedDate: new Date(`2022/${Math.floor(Math.random() * 12)}/${Math.floor(Math.random() * 28)}`),
    isDone: Math.random() >= 0.5,
    importance: importanceList[Math.floor(Math.random() * 3)],
  };
});
