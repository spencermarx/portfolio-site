import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import initializeLogRocket from '../vendors/logRocket.vendor';
import './layout.scss';

export default props => {
  initializeLogRocket();
  const { children } = props;
  return (
    <>
      <Header />
      <main className="Layout-MainContent">{children}</main>
      <Footer />
    </>
  );
};
