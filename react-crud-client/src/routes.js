import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import Posts from "./views/Posts";
import Create from "./views/Create";
import Edit from "./views/Edit";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Posts} />
    <Route path="/create-post" component={Create} />
    <Route path="/edit-post" component={Edit} />
  </Route>
);
