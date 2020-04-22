import React from 'react';
import {BrowserRouter, HashRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Navbar";
import Header from "./components/Header";
import Saved from "./pages/Saved";
import './App.css';

function App() {
  return (
    <HashRouter>
    <Nav/>
    <Header />
    <Switch>
    <div className="container">
    <Route exact path = "/" component={Home} />
    <Route exact path = "/saved" component={Saved} />
    </div>
    </Switch>
    </HashRouter>
  );
}

export default App;
