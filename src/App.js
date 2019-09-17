import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import refs from './refs';
import PalindromStrings from './PalindromStrings';
import { Router, BrowserRouter, Route } from 'react-router-dom'

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/refs' component={refs} />
        <Route path='/palindrom' component={PalindromStrings}></Route>
      </BrowserRouter>

    );
  }
}



export default App;
