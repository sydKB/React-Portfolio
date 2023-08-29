import React from 'react';
import { Outlet, Link} from 'react-router-dom'
import '../pages.css'

export default function Header() {
  return (
    <header className="header">
        <div className='my-name'>Sydney Birza</div>
        <div className="nav">
            <nav>
                <Link to="/">About me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </nav>
        </div>
        <Outlet />
    </header>
  );
};