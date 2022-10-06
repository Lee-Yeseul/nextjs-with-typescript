import { useRouter } from 'next/router';

const PageAPI = () => {
  const router = useRouter();
  const page = router.query.page;
  console.log(page);

  return <div>dynamic routing!</div>;
};

export default PageAPI;
