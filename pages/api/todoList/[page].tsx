import { NextRouter, useRouter, withRouter } from "next/router";

type withRouterProps = {
  router: NextRouter;
};

const PageAPI = () => {
  const router: NextRouter = useRouter();
  const page = router.query.page;
  console.log(page);
  withRouter;
  return <div>dynamic routing!</div>;
};

export default withRouter(PageAPI);
