import { path } from "./../../utils/path";
import { rest } from "msw";
import { Todo } from "../../types";
import { db } from "../db";

export const todoHandler = [
  rest.get(path.todo, (req, res, ctx) => {
    const todoList = db.todo.getAll();
    return res(ctx.delay(0), ctx.status(200), ctx.json(todoList));
  }),
  rest.post<Todo>(path.todo, (req, res, ctx) => {
    const todo = db.todo.create(req.body);
    return res(ctx.status(200), ctx.json(todo));
  }),

  rest.put<Todo>(path.todo, (req, res, ctx) => {
    const result = db.todo.update({
      where: {
        id: {
          equals: req.body.id,
        },
      },
      strict: true,
      data: req.body,
    });
    return res(ctx.status(200), ctx.json(result));
  }),

  rest.delete<{ id: string }>(path.todo, (req, res, ctx) => {
    const result = db.todo.delete({
      where: { id: { equals: req.body.id } },
      strict: true,
    });
    return res(ctx.status(200), ctx.json(result));
  }),
];
