import React from 'react';

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
                <a href="/">Work</a>
              </li>
              <li className="h6">
                <a href="AboutScreen.js">About</a>
              </li>
              <li className="h6">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
