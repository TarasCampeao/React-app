import React, { Fragment } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <Footer />
  </Fragment>
);

export default App;