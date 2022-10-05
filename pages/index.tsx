import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import axios from 'axios';
import Todo from '../components/Todo/Todo';
import { TodoItem } from '../interfaces/';
import AddTodo from '../components/Todo/AddTodo';
import { Container } from '@mui/material';

const IndexPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <AddTodo />
      <Todo />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/todolist');
  const data: TodoItem[] = res.data;
  return {
    props: { data },
  };
};

export default IndexPage;
