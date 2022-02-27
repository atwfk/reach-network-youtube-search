import React from "react";
import type { FC, ReactElement } from "react";
import { GlobalStyle } from "./UiStyles";

const Layout: FC = ({ children }): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
};

export default Layout;
