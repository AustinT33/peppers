import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CropLogo from './Pictures/gwf-logo-crop.jpg'
import Home from './Components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <img className="logo-cropped" src={CropLogo} alt='gwf-logo'/>
          <Home />
        </header>
      </div>
    );
  }
}

export default App;
