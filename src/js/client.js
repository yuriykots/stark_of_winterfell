import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import routes from './routes';



const app = document.getElementById('app');
ReactDOM.render(
  <Router routes={routes} history={browserHistory}>
  </Router>,
  app);
