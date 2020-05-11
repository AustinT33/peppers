import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <NavBar />
              <Home />
          </header>
        </div>
    );
  }
}

export default App;
