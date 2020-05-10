import React from 'react';
import PurpleBell from '../Pictures/purple-bell.JPG'

function Hot() {
    return (
        <div className="container">
            <h2 className="pepper-title">Hot Peppers</h2>
            <div className="pepper-container">
                <ul className="pepper-ul">
                    <li className="pepper-li">
                        <img className="pepper-img" alt='purple-bell' src={PurpleBell}/>
                        <div className="strain-text">Hatch Chili</div>
                    </li>
                    <li className="pepper-li">
                        <img className="pepper-img" alt='purple-bell' src={PurpleBell}/>
                        <div className="strain-text">Jalapeno</div>
                    </li>
                    <li className="pepper-li">
                        <img className="pepper-img" alt='purple-bell' src={PurpleBell}/>
                        <div className="strain-text">Maule's Red Cayenne</div>
                    </li>
                    <li className="pepper-li">
                        <img className="pepper-img" alt='purple-bell' src={PurpleBell}/>
                        <div className="strain-text">Orange Habanero</div>
                    </li>
                </ul>
            </div>
            {/* <div className="seeds">Seeds</div>
            <div className="pods">Dried Pods</div> */}
        </div>
    )
}

export default Hot