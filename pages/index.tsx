import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState, useEffect } from "react";
import axios from "axios";
import { TodoItem } from "../interfaces/";
import AddTodo from "../components/Todo/AddTodo";
import { Container } from "@mui/material";
import TodoList from "../components/Todo/TodoList";

const IndexPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [todolist, setTodolist] = useState<TodoItem[]>(data);

  useEffect(() => {
    const getTodolist = async () => {
      const res = await axios.get("http://15.164.50.182:3000/api/list");
      const data: TodoItem[] = res.data;
    };
    getTodolist();
  }, [todolist]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AddTodo setTodolist={setTodolist} todolist={todolist} />
      <TodoList todolist={todolist} setTodolist={setTodolist} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("http://15.164.50.182:3000/api/list");
  const data: TodoItem[] = res.data;
  return {
    props: { data },
  };
};

export default IndexPage;
