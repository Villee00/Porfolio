import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import Head from 'next/head';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default MyApp;
