import React from 'react';
import {SweetPeppers} from '../Components/Data/Peppers'


function Sweet() {
    return (
        <div className="container">
            <h2 className="pepper-title">Sweet Peppers</h2>
            <div className="pepper-container">
                <ul className="pepper-ul">
                    {SweetPeppers.map(function(p, idx){
                        return(<li className="peppers-li" key={idx}><div className="strain-text">{p.name}</div>{p.image}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sweet
