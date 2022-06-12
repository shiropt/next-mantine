export type Todo = {
  id: number;
  title: string;
  fixedDate: Date;
  isDone: boolean;
  importance: "低" | "中" | "高";
};

export type ErrorResponse = {
  statusCode: number;
  message: string;
};
export type User = {
  id?: number;
  name: string;
  email: string | null;
  password: string;
  phone: number | null;
};
