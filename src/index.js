import React from 'react';
import ReactDOM from 'react-dom';
import App from './test/Task';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from './test/components/home/home';
import About from './test/components/about/about';
import Contacts from './test/components/contacts/contacts';
import Post from './test/components/post/post';
import './test/assets/style/reset.sass';
import './test/assets/style/media.sass';



ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/about' component={About} />
        <Route path='/posts/:id' component={Post} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
