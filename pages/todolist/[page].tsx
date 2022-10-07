//api 호출 없이 전체 list 가져와서 getServerSideProps로 pagination 하는 page

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Page = ({}) => {
  const router = useRouter();
  const page = router.query.page;
  const perPage = 6;

  // props로 total 값 받기
  // const totalTodos =
  // const totalPages = totalTodos / perPage // 정수처리하기
  // const start = (page -1) * perPage
  // const end = start + perPage
  // if(end > totalTodos){

  // }

  return <div>dynamic routing!</div>;
};

export default Page;
