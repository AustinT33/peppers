import React from 'react';
import ButchTrinScorp from '../Pictures/butch-t-trin-scorp.jpg'

function Crazy() {
    return (
        <div className="container">
            <h2 className="pepper-title">Crazy Hot Peppers</h2>
            <div className="pepper-container">
                <ul className="pepper-ul">
                    <li className="pepper-li">
                        <img className="pepper-img" alt='Butch-t-trinidad-scorpion' src={ButchTrinScorp}/>
                        <div className="strain-text">Butch T. Trinidad Scorpion</div>
                    </li>
                    <li className="pepper-li">
                        <img className="pepper-img" alt='purple-bell' src={ButchTrinScorp}/>
                        <div className="strain-text">Caribbean Red Habanero</div>
                    </li>
                    <li className="pepper-li">
                        <img className="pepper-img" alt='purple-bell' src={ButchTrinScorp}/>
                        <div className="strain-text">Firecracker</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Crazy
            {/* <div className="seeds">Seeds</div>
            <div className="pods">Dried Pods</div> */}