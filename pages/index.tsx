import Layout from "../components/Layout/Layout";
import { CssBaseline } from "@mui/material";
import Todo from "../components/Todo/Todo";

const IndexPage = () => (
  <div>
    <CssBaseline />
    <Layout title="Todo list | Next.js + TypeScript">
      <Todo />
    </Layout>
  </div>
);

export default IndexPage;
