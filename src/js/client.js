import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Components/Layout";
import IndexPage from "./Components/IndexPage";
import NotFound from "./Components/NotFound";
import CharacterPage from "./Components/CharacterPage";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import routes from './routes';



const app = document.getElementById('app');
ReactDOM.render(
  <Router routes={routes} history={browserHistory}>
  </Router>,
  app);

//    <IndexRoute component={IndexPage}/>
//    <Route path="character/:id" component = {CharacterPage}/>
//    <Route path="*" component={NotFoundPage}/>
//    <Route path="/character" component={CharacterPage}/>
