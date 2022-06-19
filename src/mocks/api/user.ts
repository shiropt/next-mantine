import { path } from "./../../utils/path";
import { rest } from "msw";
import { db } from "../db";

export const userHandler = [
  rest.get(path.user, (req, res, ctx) => {
    const users = db.user.findFirst({ where: { id: { equals: "1" } } });
    return res(ctx.status(200), ctx.json(users));
  }),
];
