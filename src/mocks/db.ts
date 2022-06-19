import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
  user: {
    id: primaryKey(() => Math.random().toString(32).substring(2)),
    name: String,
  },
  todo: {
    id: primaryKey(() => Math.random().toString(32).substring(2)),
    title: String,
    fixedDate: () => new Date(),
    isDone: Boolean,
    importance: String,
  },
});
db.user.create({ id: "1", name: "shiro" });
db.todo.create({ id: "1", title: "トレーニング", fixedDate: new Date(), isDone: false, importance: "高" });
