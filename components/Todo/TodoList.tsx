// 전체 todo.map으로 전체 todo list 뿌리기
import { Dispatch, SetStateAction } from "react";
import { TodoItem } from "../../interfaces";
import Todo from "./Todo";
import { Box } from "@mui/material";

type Props = {
  todolist: TodoItem[];
  setTodolist: Dispatch<SetStateAction<TodoItem[]>>;
};
const TodoList = ({ todolist, setTodolist }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#b388ff",
        width: 400,
        boxShadow: 2,
      }}
    >
      {todolist.map((todo) => {
        return <Todo key={todo._id} todo={todo} setTodolist={setTodolist} />;
      })}
    </Box>
  );
};

export default TodoList;
