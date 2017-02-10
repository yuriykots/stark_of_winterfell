import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from "./Components/Layout";
import IndexPage from "./Components/IndexPage";
import CharacterPage from "./Components/CharacterPage";

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="/character/:id" component={CharacterPage}/>
  </Route>
);

export default routes;
