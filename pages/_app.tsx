import Layout from "@components/Layout";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global-styles";
import { theme } from "styles/theme";
import { SWRConfig } from "swr";
import axios from "axios";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => axios.get(url),
      }}
    >
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </SWRConfig>
  );
}

export default MyApp;
