import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.css';

import Home from "./pages/home";
import Overall from './pages/overall_site';
import Filmography from './pages/filmography';
import Photography from "./pages/photography";
import About from './pages/about';

export default function App() {

  return (
    <>
      <CssBaseline/>

      <Route exact path="/" component={Home}/>
      <Route exact path="/overall" component={Overall}/>
      <Route exact path="/filmography" component={Filmography}/>
      <Route exact path="/photography" component={Photography}/>
      <Route exact path="/about" component={About}/>


    </>
  );
}
