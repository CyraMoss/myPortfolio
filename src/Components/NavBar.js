import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header id="header">
      <div className="wrap-header--padding-sm">
        <nav className="main-navigation">
          <div className="title">
            <a href="/">
              <span className="h6">Cyra Moss</span>
            </a>
            <span className="h6">Software Developer</span>
          </div>
          <div id="main-menu">
            <ul>
              <li className="h6">
                <Link to="/work">Work</Link>
              </li>
              <li className="h6">
                <Link to="/about">About</Link>
              </li>
              <li className="h6">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
