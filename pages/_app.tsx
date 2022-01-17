import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/styles/GlobalStyle";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
