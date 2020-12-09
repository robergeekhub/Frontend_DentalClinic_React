import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

const Header = ({user,setUser}) => {

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        setUser(null)
    }
    return (
        
        <header className="header">
            <div class="logo">
                <img src="dental.png" alt="symbol of the clinic" width="30%" height="30%" ></img>
            </div>
            <Link to="/">Home</Link>
            {user ?
                <div className="loggedIn">
                    <Link to="/profile">{user.email}</Link>
                    <span className="logout" onClick={logout}>Logout</span>
                </div> :
                <div className="notLoggedIn">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>}
                
        </header>
    )
}
export default Header;