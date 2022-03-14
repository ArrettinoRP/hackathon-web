import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../assets/icons';
import './headerStyles.css';

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/');
    };
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/top-developers">Top Developers</Link>
                    </li>
                </ul>
                <div className="logo" onClick={onClick}>
                    <Logo />
                </div>
            </div>
        </nav>
    );
};
