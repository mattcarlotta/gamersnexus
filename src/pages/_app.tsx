import * as React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import GlobalStylesheet from "~styles/globalStylesheet";
import { wrapper } from "~store";
import NavHeader from "~components/Layout/Header";
import "react-toastify/dist/ReactToastify.css";
import { AppProps, FC } from "~types";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <NavHeader />
    <Component {...pageProps} />
    <GlobalStylesheet />
    <ToastContainer
      position="top-right"
      autoClose={7500}
      hideProgressBar={false}
      newestOnTop={false}
      draggable
      pauseOnHover
    />
  </>
);

export default wrapper.withRedux(App);
