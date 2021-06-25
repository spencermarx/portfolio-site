import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import "./layout.scss";
import { ReactBaseProps } from "@typing/interfaces/react/react.interface";

type Props = ReactBaseProps;

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main className="Layout-MainContent">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
