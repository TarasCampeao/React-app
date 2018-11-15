import React, { Fragment } from 'react';


import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import './style/reset.sass';

const App = ({ children }) => (
  <Fragment>
    <Header />
    <main className="wrapper">
    	{children}
    </main>
    <Footer />
  </Fragment>
);

export default App;