import React from 'react';
import { BrowserRouter as Router, Route } from "react-route-dom";
import Home from "./components/pages/Home";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path = "/" component={Home} />
    </div>
    </Router>
  );
}

export default App;
