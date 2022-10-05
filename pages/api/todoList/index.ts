// todolist api 작업
//CRUD 작업

import { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "../../../interfaces";

export const mockTodo = [
  { id: 1, description: "todo1", isSuccess: true },
  { id: 1, description: "todo1", isSuccess: true },
];

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const todoList: Todo[] = mockTodo;
  try {
    res.status(200).json(todoList);
  } catch (err: any) {
    res.status(500).json({ statusCoude: 500, message: err.message });
  }
};

export default handler;
