import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
