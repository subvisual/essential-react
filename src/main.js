import React from 'react';
import Router from 'react-router';

import './Pages/site/base.css';

import Routes from './Routes';

Router.run(Routes, Router.HistoryLocation, function(Handler, state) {
  React.render(<Handler />, document.body);
});
