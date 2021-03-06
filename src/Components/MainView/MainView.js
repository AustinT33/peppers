import React from 'react'
import { Link } from 'react-router-dom';
import Back from '../../Pictures/back-arrow.png';
import './MainView.css';

function MainView(props) {
        return (
            //this MainView Component is only available in Sweet Peppers-----------
            <div className="main-view-container">
                <Link className="back2" to="/peppers-sweet"><img className="back-arrow2" src={Back} alt="back"/></Link>
                <div>
                    {props.peppers.filter(pepper => pepper.id === 4).map(pepperId => (
                        <h2 key={pepperId}className="main-view-title">{pepperId.name}</h2>
                    ))}
                    </div>
                {/* <h2 className="main-view-title">{props.pepper}</h2> */}
                {/* <img
                    className="selected-pepper-img"
                    alt={peppers.name}
                    src={peppers.image}
                  />
                <div className="main-view-description">{peppers.description}</div> */}
                <div className="order-opts">
                    <select className="order-select" defaultValue="Seeds">
                        <option className="hide" value="seeds">Seeds</option>
                        <option className="vals" value="small">Small Bag</option>
                        <option className="vals" value="large">Large Bag</option>
                    </select>
                    <select className="order-select" defaultValue="Dried Pods">
                        <option className="hide" value="pods">Dried Pods</option>
                        <option className="vals" value="small">3 Count</option>
                        <option className="vals" value="large">5 Count</option>
                    </select>
                </div>
            </div>
            )
        }
//     }
// }


export default MainView