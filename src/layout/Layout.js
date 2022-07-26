import React, { Fragment } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

/**
 * Component to display a Layout
 *
 * @component
 *
 *
 * @param {object} props.children - All children data between the component
 *
 *
 * @returns (
 *  <Layout>
 *    {props.children}
 *  </Layout>
 *)
 */

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
