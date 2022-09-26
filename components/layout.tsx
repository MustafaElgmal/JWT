import React from "react";
import { AppProps } from "../types";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: AppProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
