import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AutoGridHeader from './components/AutoGridAppBarHeader'
import AutoGrid from './components/AutoGrid'
import MenuAppBar from './components/MenuAppBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
          {/*<AutoGridHeader />*/}
          <MenuAppBar />
          <AutoGrid />
      </div>
    );
  }
}

export default App;
