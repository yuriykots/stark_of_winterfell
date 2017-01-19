import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Components/Layout";
import CharacterPage from "./Components/CharacterPage";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}/>
    <Route path="/character/:id" component={CharacterPage}/>
  </Router>,
  app);

  //    <IndexRoute component={IndexPage}/>
  //    <Route path="character/:id" component = {CharacterPage}/>
  //    <Route path="*" component={NotFoundPage}/>
//    <Route path="/character" component={CharacterPage}/>
