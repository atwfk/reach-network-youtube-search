import React from "react";
import type { FC, ReactElement } from "react";
import { GlobalStyle } from "./UiStyles";
import Navbar from "../../components/molecules/Navbar";
import ProgressBar from "../../components/atoms/ProgressBar";
import { useMedia } from "../../hooks/useMedia";
import { SCREENS } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Layout: FC<{ loading: boolean }> = ({ children, loading }): ReactElement => {
  const matched = useMedia(`(max-width: ${SCREENS.SM})`);

  return (
    <>
      <GlobalStyle />
      <ToastContainer limit={2} />
      {!matched && loading && <ProgressBar />}
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
