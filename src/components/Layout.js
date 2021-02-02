import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Particles from './Particles/Particles'
import Footer from './Footer';
import './layout.scss';

const colors = ["#83EF72", "#F84D4D", "#3779BB", "#FFB46B"];

export default function Layout(props) {
  return (
      <React.Fragment>
            <Header />
            <Particles count="20" colors={colors} />
            <main className="Layout-MainContent">
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

