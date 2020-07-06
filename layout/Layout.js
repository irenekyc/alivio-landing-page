import Head from "next/head";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Alivio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="font-body text-textColor">{children}</body>
    </Fragment>
  );
};

export default Layout;
