import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './task/Task';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
