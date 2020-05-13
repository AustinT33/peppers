import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

function Home() {
    return(
            <div className="home-container">
                <div className='title-container'>
                    <h1 className="title">Welcome to Green Wolf Forest</h1>
                    <div className="bio">I'm a small garden hobbyist crazy about peppers, but I have an issue, I can't handle the heat so I have tons of hot peppers to share! I grow peppers of all kinds, all plants and produce are soil or hydroponically grown. If you're crazy about peppers like myself, scroll on down!</div>
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
            </div>
    )
}

export default Home;