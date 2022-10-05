import { GetStaticProps } from "next";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout/Layout";
import List from "../../components/Lists/List";

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript">
    <h1>Users List</h1>
    <List items={items} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
