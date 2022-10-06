import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState, useEffect } from "react";
import axios from "axios";
import { TodoItem } from "../interfaces/";
import AddTodo from "../components/Todo/AddTodo";
import { Container } from "@mui/material";
import TodoList from "../components/Todo/TodoList";
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";

const IndexPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
  });

  const [todolist, setTodolist] = useState<TodoItem[]>(data);

  useEffect(() => {
    const getTodolist = async () => {
      const res = await axios.get("http://15.164.50.182/api/list");
      const data: TodoItem[] = res.data;
    };
    getTodolist();
  }, [todolist]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

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
    </ThemeProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("http://15.164.50.182/api/list");
  const data: TodoItem[] = res.data;
  return {
    props: { data },
  };
};

export default IndexPage;
