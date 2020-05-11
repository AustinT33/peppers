import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import SweetRoute from '../../Routes/SweetRoute';
import HotRoute from '../../Routes/HotRoute';
import CrazyRoute from '../../Routes/CrazyRoute';
import HybridRoute from '../../Routes/HybridRoute';
import './Home.css';

function Home() {
    return(
        <BrowserRouter>
            <div className="home-container">
                <div className='title-container'>
                    <h1 className="title">Welcome to Green Wolf Forest</h1>
                    <div className="bio">I'm a small garden hobbyist crazy about peppers, but I have an issue, I can't handle the heat so I have tons of hot peppers to share! I grow peppers of all kinds, all plants and produce are completely organic and naturally grown. If you're crazy about peppers like myself, scroll on down!</div>
                </div>
                <div className="opts-container">
                    <h2 className="sub-title">Explore Peppers</h2>
                    <div className="peppers-opts">
                        <Link className="peppers-link" to="peppers-sweet">Sweet Peppers</Link>
                    </div>
                    <div className="peppers-opts">
                        <Link className="peppers-link" to="peppers-hot">Hot Peppers</Link>
                    </div>
                    <div className="peppers-opts">
                        <Link className="peppers-link" to="peppers-crazy">Crazy Hot Peppers</Link>
                    </div>
                    <div className="peppers-opts">
                        <Link className="peppers-link" to="peppers-hybrid">Hybrid Peppers</Link>
                    </div>
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
            </div>
        </BrowserRouter>
    )
}

export default Home;