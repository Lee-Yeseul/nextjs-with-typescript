import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { CssBaseline } from "@mui/material";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Todo List">
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
  );
}
