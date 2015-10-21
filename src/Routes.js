import React from 'react';
import { Router, Route } from 'react-router';

import Landing from './Pages/Landing/Landing';
import Home from './Pages/Home/Home';

export default (
  <Route path="/">
    <Route name="landing" path="landing" handler={Landing} />
    <Route name="home" path="/" handler={Home} />
  </Route>
);
