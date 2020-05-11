import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import SweetRoute from './Routes/SweetRoute';
import HotRoute from './Routes/HotRoute';
import CrazyRoute from './Routes/CrazyRoute';
import HybridRoute from './Routes/HybridRoute';
import CropLogo from './Pictures/gwf-logo-crop.jpg'
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <NavBar />
              <Link to="/"><img className="logo-cropped" src={CropLogo} alt='gwf-logo'/></Link>
              <Route exact path="/"><Home /></Route>
            </header>
          </div>
            <Switch>
              <Route path="/peppers-sweet">
                  <SweetRoute />
              </Route>
              <Route path="/peppers-hot">
                  <HotRoute />
              </Route>
              <Route path="/peppers-crazy">
                  <CrazyRoute />
              </Route>
              <Route path="/peppers-hybrid">
                  <HybridRoute />
              </Route>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
