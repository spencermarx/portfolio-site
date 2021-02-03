import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import './layout.scss';

export default props => {
  const { children } = props;
  return (
    <>
      <Header />
      <main className="Layout-MainContent">{children}</main>
      <Footer />
    </>
  );
};
