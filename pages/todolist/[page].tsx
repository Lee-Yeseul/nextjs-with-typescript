//api 호출 없이 전체 list 가져와서 getServerSideProps로 pagination 하는 page

import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { TodoItem } from '../../interfaces/';

const Page = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const page = router.query.page;
  const perPage = 5;
  const checkDev = process.env.NEXT_PUBLIC_DEV;
  let initialData;
  if (checkDev) {
    initialData = data.lists;
  } else {
    initialData = data;
  }

  // props로 total 값 받기
  // const totalTodos =
  // const totalPages = totalTodos / perPage // 정수처리하기
  // const start = (page -1) * perPage
  // const end = start + perPage
  // if(end > totalTodos){

  // }

  return <div>dynamic routing!</div>;
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

export default Page;
