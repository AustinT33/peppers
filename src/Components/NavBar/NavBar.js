import React from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom'

function NavBar() {
    return(
        <div className="nav-container">
            <nav className="nav-bar">
                <ul className="nav-ul">
                    <li className="nav-li"><Link to="/gwf-login"className="login-link">Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;