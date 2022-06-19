import { todoHandler } from "./api/todo";
import { userHandler } from "./api/user";

export const handlers = [...todoHandler, ...userHandler];
