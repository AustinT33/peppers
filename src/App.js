import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import CropLogo from './Pictures/gwf-logo-crop.jpg'
import Home from './Components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar />
            <img className="logo-cropped" src={CropLogo} alt='gwf-logo'/>
            <Route exact path="/">
              <Home />
            </Route>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
