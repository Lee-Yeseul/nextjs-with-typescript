import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout title='Todo List'>
        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            height: 100vh;
          }
        `}</style>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
