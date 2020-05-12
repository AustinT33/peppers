import React from 'react'
import { Link } from 'react-router-dom';
import Back from '../../Pictures/back-arrow.png';
import './MainView.css';

function MainView(props) {
    return (
        <div className="main-view-container">
            <Link className="back2" to="/peppers-sweet"><img className="back-arrow2" src={Back} alt="back"/></Link>
            <h2 className="main-view-title">Bell Pepper</h2>
            <img alt="bell-pepper" className="large-image" src="https://i.imgur.com/RVRPnwKl.jpg"/>
            <div className="main-view-description">Naturally grown sweet Bell Peppers, yields vibrant large fruits, seeds and pods are not color specific, the colors range from red, yellow, green, orange, and some even purple! Seeds are carefully dried before storage and sealed in ziplock bags.</div>
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

export default MainView