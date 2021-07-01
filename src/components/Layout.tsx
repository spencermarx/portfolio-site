import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import "./layout.scss";
import { ReactBaseProps } from "@typing/interfaces/react/react.interface";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = ReactBaseProps;

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main className="Layout-MainContent">{children}</main>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Footer />
    </>
  );
};

export default Layout;
