import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import AppView from './components/app-view';

import menu from './common/menu.json';

class App extends Component {

  componentDidMount() {
    console.log("menu", menu);
  }

  render() {
    return (
      <Router>

        <div className="App" style={{height:500, flex:1}}>
          
          <header className="App-header" style={{height:200}}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <AppView menu={menu} />

        </div>

      </Router>
    );
  }
}


export default App;
