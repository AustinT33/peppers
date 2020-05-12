import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Config from './Config'
import SweetRoute from './Routes/SweetRoute';
import HotRoute from './Routes/HotRoute';
import CrazyRoute from './Routes/CrazyRoute';
import HybridRoute from './Routes/HybridRoute';
import CropLogo from './Pictures/gwf-logo-crop.jpg'
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import './App.css';
import MainView from './Components/MainView/MainView';

class App extends Component {
    constructor(){
      super();
      this.state = {
          error: null,
          peppers:[],
          isLoaded: false,
      }
  }

      componentDidMount(){
        fetch(`${Config.API_ENDPOINT}/peppers`)
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        peppers: data
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

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
              <Route path="/test">
                <MainView peppers={this.state.peppers}/>
              </Route>
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
