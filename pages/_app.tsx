import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import GlobalStyle from "../src/commons/styles/GlobalStyle";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
