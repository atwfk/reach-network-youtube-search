import React from "react";
import type { FC, ReactElement } from "react";
import { GlobalStyle } from "./UiStyles";
import Navbar from "../../components/molecules/Navbar";

const Layout: FC = ({ children }): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
