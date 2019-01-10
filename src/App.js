import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import PopularPage from "./routes/PopularPage";
import ComingSoonPage from "./routes/ComingSoonPage";

export default () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PopularPage}/>
        <Route path="/suggestions" component={ComingSoonPage}/>
      </Switch>
  </BrowserRouter>
);;
