import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

function Login() {
    return(
        <div className="login-container">
            <h2 className="login-header">Login</h2>
            <div className="input-container">
                <input className="username" placeholder="Username"/>
                <input className="password" placeholder="Password"/>
            </div>
            <div className="other-options">
                <Link to="/" className="back-to-home-link">Back to Home</Link>
                <Link to="/create-account" className="create-account">Create Account</Link>
            </div>
        </div>
    )
}

export default Login