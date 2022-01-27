import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { useMemo } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <>
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
