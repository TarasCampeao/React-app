import React, { Fragment } from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import './style/reset.sass';

const App = ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <Footer />
  </Fragment>
);

export default App;