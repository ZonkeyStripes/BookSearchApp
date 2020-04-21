import React from 'react';
import {BrowserRouter, HashRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Navbar";
import './App.css';

function App() {
  return (
    <HashRouter>
    <Nav/>
    <Switch>
    <div className="container">
    <Route exact path = "/" component={Home} />
    </div>
    </Switch>
    </HashRouter>
  );
}

export default App;
