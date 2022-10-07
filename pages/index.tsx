import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TodoItem, UserInfo } from "../interfaces/";
import AddTodo from "../components/Todo/AddTodo";
import { Container, Pagination } from "@mui/material";
import TodoList from "../components/Todo/TodoList";
import { ThemeProvider, createTheme } from "@mui/material";

const IndexPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const checkDev = process.env.NEXT_PUBLIC_DEV;
  let initialData;
  if (checkDev) {
    initialData = data.lists;
    const userInfo = data.userInfo;
  } else {
    initialData = data;
  }
  console.log(data);
  console.log(initialData);

  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
  });

  const devTheme = createTheme({
    // keyColor: #b388ff
    // subColor :#E2D6FF
  });

  const productionTheme = createTheme({
    // keyColor: #b388ff
    // subColor :#E2D6FF
  });

  const [todolist, setTodolist] = useState<TodoItem[]>(data);
  const [curList, setCurList] = useState<TodoItem[] | null>(null);
  const [curPageNumber, setCurPageNumber] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    const getPagination = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/list/pagenate`,
        {
          params: {
            perPage: 5,
            page: curPageNumber,
          },
        }
      );

      const data = await res.data.result;
      setCurList(data.lists);
      setTotalPage(data.totalPage);
      console.log(data);
    };

    getPagination();
  }, [curPageNumber, todolist]);

  // pagination 함수
  const handlePagination = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurPageNumber(page);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <AddTodo setTodolist={setTodolist} todolist={todolist} />
        {curList && <TodoList todolist={curList} setTodolist={setTodolist} />}
        <Pagination count={totalPage} onChange={handlePagination} />
      </Container>
    </ThemeProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/list`);
  const data: TodoItem[] = await res.data.result;

  return {
    props: {
      data,
    },
  };
};

export default IndexPage;
