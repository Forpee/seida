import App from "next/app";
import Head from "next/head";
import Layout from "../components/layout";

import "../styles/globals.css";



import Router from "next/router";
const MyApp = ({ Component, pageProps }) => {
  
  return (
    <Layout >
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css"
        />
        <script src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;